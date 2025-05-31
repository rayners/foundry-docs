# ApplicationV2 Development Guide

A comprehensive guide to developing Foundry VTT modules using the modern ApplicationV2 framework, based on real-world implementation experience from Seasons & Stars.

## Overview

ApplicationV2 is Foundry VTT's modern application framework introduced in v13. It provides significant improvements over the legacy Application class, including better performance, improved TypeScript support, and more robust event handling.

## Why ApplicationV2?

### Performance Benefits
- **Partial Rendering**: Only update changed parts of the UI
- **Efficient Event Handling**: Action-based system reduces overhead
- **Memory Management**: Better cleanup and resource management
- **Scroll Preservation**: Automatic scroll position maintenance

### Developer Experience
- **Type Safety**: Enhanced TypeScript integration
- **Cleaner Architecture**: Action-based events vs manual listeners
- **Future-Proof**: Aligned with Foundry's development direction
- **Better Testing**: More modular and testable components

## Basic ApplicationV2 Structure

### Minimal Implementation

```javascript
import { foundry } from '@league-of-foundry-developers/foundry-vtt-types';

class MyWidget extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
) {
  static DEFAULT_OPTIONS = {
    id: 'my-widget',
    classes: ['my-module', 'widget'],
    tag: 'div',
    window: {
      frame: true,
      positioned: true,
      title: 'MODULE.Widget.Title',
      icon: 'fa-solid fa-calendar'
    },
    position: {
      width: 300,
      height: 200
    }
  };

  static PARTS = {
    main: {
      template: 'modules/my-module/templates/widget.hbs'
    }
  };

  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);
    return foundry.utils.mergeObject(context, {
      currentData: this.getCurrentData(),
      isGM: game.user?.isGM || false
    });
  }
}
```

### With Action Handlers

```javascript
class InteractiveWidget extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
) {
  static DEFAULT_OPTIONS = {
    // ... base options
    actions: {
      submit: InteractiveWidget.#onSubmit,
      cancel: InteractiveWidget.#onCancel,
      selectItem: InteractiveWidget.#onSelectItem
    }
  };

  // Static action handlers
  static async #onSubmit(event, target) {
    const app = event.currentTarget.closest('[data-appid]').app;
    const formData = new FormData(target.closest('form'));
    await app.processSubmission(Object.fromEntries(formData));
  }

  static async #onSelectItem(event, target) {
    const app = event.currentTarget.closest('[data-appid]').app;
    const itemId = target.dataset.itemId;
    app.selectItem(itemId);
    app.render({ parts: ['content'] }); // Partial re-render
  }
}
```

## Migration from Legacy Application

### Key Differences

| Legacy Application | ApplicationV2 | Notes |
|-------------------|---------------|-------|
| `static get defaultOptions()` | `static DEFAULT_OPTIONS = {}` | Object literal instead of getter |
| `getData()` | `_prepareContext()` | Must merge with super result |
| `activateListeners(html)` | `_attachPartListeners(partId, element)` | Part-specific listeners |
| Manual event handlers | Action-based handlers | Static methods with data-action |

### Step-by-Step Migration

#### 1. Update Class Declaration

```javascript
// Before (Legacy)
class MyDialog extends Application {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      // options
    });
  }
}

// After (ApplicationV2)
class MyDialog extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
) {
  static DEFAULT_OPTIONS = {
    // options
  };
}
```

#### 2. Convert Data Preparation

```javascript
// Before (Legacy)
getData() {
  return {
    items: this.getItems(),
    currentUser: game.user
  };
}

// After (ApplicationV2)
async _prepareContext(options = {}) {
  const context = await super._prepareContext(options);
  return foundry.utils.mergeObject(context, {
    items: this.getItems(),
    currentUser: game.user
  });
}
```

#### 3. Convert Event Handling

```javascript
// Before (Legacy)
activateListeners(html) {
  super.activateListeners(html);
  html.find('.submit-button').click(this._onSubmit.bind(this));
  html.find('.item').click(this._onSelectItem.bind(this));
}

_onSubmit(event) {
  // Handle submission
}

// After (ApplicationV2)
static DEFAULT_OPTIONS = {
  actions: {
    submit: MyDialog.#onSubmit,
    selectItem: MyDialog.#onSelectItem
  }
};

static async #onSubmit(event, target) {
  // Handle submission
}

// Template: <button data-action="submit">Submit</button>
```

## Advanced Patterns

### PARTS System for Complex UIs

Use PARTS when you have complex layouts that benefit from independent rendering:

```javascript
static PARTS = {
  header: {
    template: 'modules/my-module/templates/header.hbs'
  },
  navigation: {
    template: 'modules/my-module/templates/navigation.hbs'
  },
  content: {
    template: 'modules/my-module/templates/content.hbs',
    scrollable: [''] // Preserve scroll position
  },
  footer: {
    template: 'modules/my-module/templates/footer.hbs'
  }
};

// Prepare part-specific context
async _preparePartContext(partId, context, options) {
  switch (partId) {
    case 'header':
      return { ...context, title: this.getTitle() };
    case 'content':
      return { ...context, items: await this.getItems() };
    case 'footer':
      return { ...context, canSubmit: this.isValid() };
    default:
      return context;
  }
}

// Partial re-rendering for performance
async updateContent() {
  this.contentData = await this.fetchNewData();
  this.render({ parts: ['content'] }); // Only re-render content
}
```

### Event Listener Attachment

For complex event handling beyond actions:

```javascript
_attachPartListeners(partId, htmlElement, options) {
  super._attachPartListeners(partId, htmlElement, options);
  
  switch (partId) {
    case 'content':
      // Drag and drop
      htmlElement.addEventListener('dragstart', this._onDragStart.bind(this));
      htmlElement.addEventListener('drop', this._onDrop.bind(this));
      break;
      
    case 'navigation':
      // Keyboard navigation
      htmlElement.addEventListener('keydown', this._onKeyDown.bind(this));
      break;
  }
}
```

## Real-World Example: Calendar Widget

Here's how Seasons & Stars implements a calendar widget using ApplicationV2:

```javascript
export class CalendarWidget extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
) {
  private updateInterval: number | null = null;

  static DEFAULT_OPTIONS = {
    id: 'seasons-stars-widget',
    classes: ['seasons-stars', 'calendar-widget'],
    tag: 'div',
    window: {
      frame: true,
      positioned: true,
      title: 'SEASONS_STARS.calendar.current_date',
      icon: 'fa-solid fa-calendar-alt',
      minimizable: false,
      resizable: false
    },
    position: {
      width: 280,
      height: 'auto'
    },
    actions: {
      openCalendarSelection: CalendarWidget.#onOpenCalendarSelection,
      openDetailedView: CalendarWidget.#onOpenDetailedView,
      advanceTime: CalendarWidget.#onAdvanceTime,
      timeControl: CalendarWidget.#onTimeControl
    }
  };

  static PARTS = {
    main: {
      template: 'modules/seasons-and-stars/templates/calendar-widget.hbs'
    }
  };

  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);
    
    const manager = game.seasonsStars?.manager;
    if (!manager) {
      return foundry.utils.mergeObject(context, {
        error: 'Calendar manager not initialized'
      });
    }

    const activeCalendar = manager.getActiveCalendar();
    const currentDate = manager.getCurrentDate();
    
    return foundry.utils.mergeObject(context, {
      calendar: CalendarLocalization.getLocalizedCalendarInfo(activeCalendar),
      currentDate: currentDate?.toObject(),
      shortDate: currentDate?.toDateString(),
      timeString: currentDate?.toTimeString(),
      dayProgress: this.getDayProgress(),
      isGM: game.user?.isGM || false
    });
  }

  _attachPartListeners(partId, htmlElement, options) {
    super._attachPartListeners(partId, htmlElement, options);
    this.startAutoUpdate(); // Start real-time updates
  }

  // Static action handlers
  static async #onOpenCalendarSelection(event, target) {
    CalendarSelectionDialog.show();
  }

  static async #onAdvanceTime(event, target) {
    const amount = parseInt(target.dataset.amount || '0');
    const unit = target.dataset.unit || 'hours';
    const manager = game.seasonsStars?.manager;
    
    if (!manager) return;

    try {
      switch (unit) {
        case 'minutes':
          await manager.getTimeConverter()?.advanceMinutes(amount);
          break;
        case 'hours':
          await manager.getTimeConverter()?.advanceHours(amount);
          break;
        case 'days':
          await manager.advanceDays(amount);
          break;
      }
    } catch (error) {
      console.error('Error advancing time:', error);
      ui.notifications?.error('Failed to advance time');
    }
  }

  // Instance methods
  private getDayProgress(): number {
    const timeConverter = game.seasonsStars?.manager?.getTimeConverter();
    return timeConverter ? Math.round(timeConverter.getDayProgress() * 100) : 0;
  }

  private startAutoUpdate(): void {
    if (this.updateInterval) clearInterval(this.updateInterval);
    
    this.updateInterval = setInterval(() => {
      this.render({ parts: ['main'] });
    }, 30000); // Update every 30 seconds
  }

  async close(options = {}) {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    return super.close(options);
  }

  // Static utility methods for external use
  static show(): void {
    const existing = Object.values(ui.windows).find(w => w.id === 'seasons-stars-widget');
    if (existing) {
      existing.bringToTop();
    } else {
      new CalendarWidget().render(true);
    }
  }

  static hide(): void {
    const existing = Object.values(ui.windows).find(w => w.id === 'seasons-stars-widget');
    existing?.close();
  }

  static toggle(): void {
    const existing = Object.values(ui.windows).find(w => w.id === 'seasons-stars-widget');
    if (existing) {
      existing.close();
    } else {
      CalendarWidget.show();
    }
  }
}
```

### Template Integration

The corresponding Handlebars template uses `data-action` attributes:

```handlebars
<div class="calendar-widget-content">
  {{#if error}}
    <div class="error-state">
      <i class="fas fa-exclamation-triangle"></i>
      <span>{{error}}</span>
    </div>
  {{else}}
    <div class="calendar-header">
      <div class="calendar-title" data-action="openCalendarSelection">
        <i class="fas fa-calendar-alt"></i>
        <span>{{calendar.label}}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>

    <div class="date-display" data-action="openDetailedView">
      <div class="main-date">{{shortDate}}</div>
      <div class="time">{{timeString}}</div>
    </div>

    {{#if isGM}}
      <div class="time-controls">
        <button data-action="advanceTime" data-amount="1" data-unit="hours">
          <i class="fas fa-plus"></i> 1h
        </button>
        <button data-action="timeControl" data-time-action="dawn">
          <i class="fas fa-sun"></i> Dawn
        </button>
      </div>
    {{/if}}
  {{/if}}
</div>
```

## Best Practices

### 1. Always Merge Context
```javascript
// ✅ Correct
async _prepareContext(options = {}) {
  const context = await super._prepareContext(options);
  return foundry.utils.mergeObject(context, {
    myData: this.getMyData()
  });
}

// ❌ Incorrect
async _prepareContext(options = {}) {
  return {
    myData: this.getMyData()
  };
}
```

### 2. Use Static Action Handlers
```javascript
// ✅ Correct
static async #onSubmit(event, target) {
  const app = event.currentTarget.closest('[data-appid]').app;
  await app.handleSubmission();
}

// ❌ Incorrect (non-static)
async onSubmit(event, target) {
  await this.handleSubmission();
}
```

### 3. Leverage Partial Rendering
```javascript
// ✅ Efficient partial update
async updateStatus() {
  this.statusData = await this.fetchStatus();
  this.render({ parts: ['status'] });
}

// ❌ Full re-render
async updateStatus() {
  this.statusData = await this.fetchStatus();
  this.render(true);
}
```

### 4. Clean Up Resources
```javascript
async close(options = {}) {
  // Clean up intervals, listeners, etc.
  if (this.updateInterval) {
    clearInterval(this.updateInterval);
  }
  
  return super.close(options);
}
```

## Common Gotchas

1. **Context Merging**: Always merge with `super._prepareContext()` result
2. **Static Actions**: Action handlers must be static with `#` prefix
3. **Element References**: `this.element` behavior differs from V1
4. **Event Context**: Action handlers receive different parameters
5. **Lifecycle Timing**: V2 has different rendering lifecycle timing

## When to Use ApplicationV2

### Use ApplicationV2 for:
- New modules targeting Foundry v13+
- Complex dialogs with multiple sections
- Applications needing frequent updates
- Performance-critical interfaces

### Consider Legacy Application for:
- Simple modules needing v11/v12 compatibility
- Very basic dialogs with minimal interaction
- Modules nearing end-of-life

## Conclusion

ApplicationV2 represents the future of Foundry VTT application development. While it requires learning new patterns, the benefits in performance, maintainability, and developer experience make it the clear choice for modern module development.

The Seasons & Stars calendar module demonstrates these patterns in a real-world implementation, showing how ApplicationV2 can create smooth, responsive user interfaces that integrate seamlessly with Foundry VTT's core systems.