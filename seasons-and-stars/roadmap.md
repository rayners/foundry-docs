---
title: Roadmap
---

# Roadmap

Development timeline and planned features for Seasons & Stars calendar system.

## 🎯 Vision Statement

Seasons & Stars aims to be a **reliable and extensible** calendar solution for Foundry VTT, providing:
- **Seamless migration** from Simple Calendar
- **Enhanced user experience** with native Foundry v13+ UI
- **Robust developer API** for module integration
- **Community-driven development** based on real user needs

## 📅 Development Phases

## ✅ Phase 1: Foundation (Complete)
*Beta Release - Completed*

### Core Features ✅
- [x] **Modern Calendar System**
  - ApplicationV2 architecture with Handlebars templates
  - TypeScript implementation with strict typing
  - Foundry v13+ native integration

- [x] **Multiple Calendar Views**
  - Full calendar widget with complete controls
  - Compact mini widget for space efficiency
  - Monthly grid view with traditional calendar layout
  - Calendar selection dialog with previews

- [x] **Essential User Features**
  - Smart year navigation (click to jump to any year)
  - Real-world date initialization for Gregorian calendar
  - GM-only date modification with proper permissions
  - Multiple calendar support (Gregorian, Vale Reckoning)

- [x] **Simple Calendar Compatibility**
  - Automatic API compatibility layer
  - Core function mapping (`currentDateTime`, `timestampToDate`, etc.)
  - Hook system mapping for existing module integration
  - Weather module support (basic level)

- [x] **SmallTime Integration**
  - Intelligent positioning and visual consistency
  - Responsive layout adaptation
  - Standalone mode when SmallTime unavailable

### Technical Foundation ✅
- [x] **Calendar Engine**
  - Accurate date calculations with leap year support
  - World time integration with Foundry's time system
  - Multiple calendar format support
  - Performance optimization with caching

- [x] **Type System**
  - Complete TypeScript interfaces
  - Calendar data validation
  - API type safety

- [x] **Testing Framework**
  - Unit tests for core calendar logic
  - Compatibility testing tools
  - Integration test examples

---

## ✅ Phase 2: Core Integration (COMPLETE)
*Enhanced Compatibility Release*

### Notes System (Basic) ✅
- [x] **Basic Notes Implementation**
  - [x] Note creation interface via calendar grid (GMs only)
  - [x] Visual indicators showing days with notes
  - [x] Backend API for CRUD operations
  - [x] Simple Calendar compatibility via bridge module
  - [x] Module flag support for external data storage

⚠️ **Current Limitations**:
- Note editing only opens basic Foundry journal interface
- Calendar-specific metadata cannot be modified after creation
- No dedicated note management interface

### Enhanced API ✅
- [x] **Extended Simple Calendar Compatibility**
  - [x] Complete API surface implementation
  - [x] Advanced formatting functions
  - [x] Calendar data manipulation tools
  - [x] Bridge architecture for clean separation

- [x] **Native Seasons & Stars API**
  - [x] Advanced date calculation functions
  - [x] Seasonal calculations (basic implementation)
  - [x] Sunrise/sunset calculations (basic implementation)
  - [x] Performance-optimized batch operations
  - [x] Widget integration API (addSidebarButton, etc.)

- [x] **Hook System Expansion**
  - [x] Granular event hooks (`seasons-stars:dateChanged`, `seasons-stars:calendarChanged`, `seasons-stars:ready`)
  - [x] Notes system hooks (`seasons-stars:noteCreated`)
  - [x] Debug and development APIs
  - [x] Simple Calendar hook compatibility mapping

### Developer Experience ✅
- [x] **Enhanced Documentation**
  - [x] Complete API documentation with implementation status
  - [x] Developer guide with integration examples
  - [x] Module development best practices
  - [x] Simple Calendar migration guidance

- [x] **Development Tools**
  - [x] Calendar validation APIs
  - [x] Debug information methods
  - [x] Performance optimization tools
  - [x] Integration testing examples

---

## 🚧 Next Development Phases

### **v0.3.0 - Enhanced Widget Features** (Ready for Release)

**Focus**: Widget customization and interaction improvements

- **Configurable Quick Time Buttons**: Customizable time advancement with user-defined intervals and formatting
- **Calendar Click Behavior**: Configurable calendar click actions with modifier key support for date setting vs navigation
- **Enhanced Widget Controls**: Standardized button styling and improved visual consistency
- **Settings Preview**: Live preview of button configurations in module settings

### **v0.4.0 - Performance and Moon Tracking** (Next Release)

**Focus**: Performance optimization and lunar cycle features

- **Lazy Calendar Loading**: Only load required calendars to improve startup performance and reduce errors
- **Moon Phase Tracking**: Basic lunar cycle tracking for lycantropy, curses, and celestial events
- **Performance Optimization**: Reduced memory usage and faster module initialization
- **Calendar System Enhancement**: Better error handling and validation for calendar definitions

### **v0.5.0 - Notes System Enhancement** (Next Priority)

**Focus**: Complete the calendar-aware notes editing system

- **Enable Custom Note Editor**: Activate the existing `NoteEditingDialog` for calendar notes (code exists but disabled)
- **Note Metadata Management**: Interface for changing categories, tags, and date associations after creation
- **Enhanced Note Browser**: Dedicated interface for browsing and searching calendar notes with metadata filtering
- **Advanced Notes Features**: Enhanced search UI, bulk operations, and note templates

### **v0.6.0 - Calendar Creation and Import System** (Future)

**Focus**: Calendar creation and migration tools

- **Calendar Editor**: In-app tool for creating custom calendars
- **Simple Calendar Import**: Tools for migrating Simple Calendar configurations and data
- **Calendar Validation**: Built-in validation for custom calendar definitions
- **Migration Wizard**: Step-by-step guide for Simple Calendar users

### **v0.7.0 - Enhanced Module Integration** (Future)

**Focus**: Deeper integration with the Foundry ecosystem

- **Weather Module Support**: Enhanced integration with weather systems
- **Advanced Event Management**: Improved recurring events and reminders
- **API Expansion**: More comprehensive developer APIs
- **Module Templates**: Examples for module developers
- **UI/UX Improvements**: Enhanced widget interfaces and user experience refinements
- **Date Context Menus**: Right-click context menus for calendar dates with additional actions and information

### **v1.0.0 - Stable Release** (Future)

**Focus**: Production stability and feature completeness

- **Feature Parity**: Complete Simple Calendar compatibility
- **Comprehensive Testing**: Full compatibility validation
- **Performance Optimization**: Memory and speed improvements
- **Community Features**: Calendar sharing and collaboration tools
  - Historical date tracking
  - Custom intercalary day support

### Configuration & Customization 🔮
- [ ] **Advanced Settings System**
  - Per-world calendar preferences
  - User-specific display options
  - Module-specific configuration
  - Settings migration tools

- [ ] **Theme System**
  - Multiple visual themes
  - System-specific styling (D&D, PF2e, etc.)
  - Custom CSS injection
  - Dark/light mode support

- [ ] **Localization Enhancement**
  - Additional language support
  - Cultural calendar variations
  - Date format localization
  - Community translation tools

### Migration & Compatibility 🔮
- [ ] **Automated Migration Tools**
  - One-click Simple Calendar migration
  - Data validation and verification
  - Rollback capabilities
  - Migration progress tracking

- [ ] **Enhanced Module Integration**
  - Popular module compatibility packages
  - Integration testing suite
  - Module developer certification
  - Compatibility guarantees

---

## 🔮 Phase 4: Community & Ecosystem (Future)
*Ecosystem Expansion*

### Community Features 📋
- [ ] **Calendar Marketplace**
  - Community-created calendar sharing
  - Rating and review system
  - Curated collections by genre/system
  - One-click calendar installation

- [ ] **Collaboration Tools**
  - Multi-GM calendar management
  - Campaign calendar synchronization
  - Event planning tools
  - Player contribution system

### Advanced Integrations 📋
- [ ] **System-Specific Features**
  - Game system native integrations
  - Spell duration tracking
  - Rest and recovery automation
  - System-specific calendar variants

- [ ] **Third-Party Ecosystem**
  - REST API for external tools
  - Mobile app integration
  - Discord bot integration
  - Campaign management tools

### Performance & Scalability 📋
- [ ] **Enterprise Features**
  - Large campaign support
  - Performance optimization
  - Memory usage improvements
  - Concurrent user handling

---

## 🎲 Game System Roadmap

### Immediate Support ✅
- [x] **System Agnostic** - Designed to work with multiple game systems
- [x] **D&D 5e** - Full compatibility
- [x] **Pathfinder 2e** - Full compatibility
- [x] **Simple Worldbuilding** - Full compatibility

### Enhanced Support (Phase 2) 🎯
- [ ] **Dragonbane** - Enhanced calendar integration
- [ ] **Forbidden Lands** - Custom calendar support
- [ ] **SWADE** - System-specific features
- [ ] **Call of Cthulhu** - Historical calendar support

### Future Considerations (Phase 3+) 🔮
- [ ] **Cyberpunk RED** - Futuristic calendar systems
- [ ] **Starfinder** - Multi-planetary calendars
- [ ] **Warhammer Fantasy** - Imperial calendar
- [ ] **Custom Systems** - Generic integration templates

---

## 📊 Development Goals

### Phase 1 Goals ✅
- [x] **Core Compatibility**: Weather modules work with Simple Calendar bridge
- [x] **User Feedback**: Positive reception from alpha testers
- [x] **Performance**: Optimized calendar calculations and UI rendering
- [x] **Foundation**: Stable API and core functionality

### Phase 2 Goals ⚠️
- [x] **Basic Notes System**: Note creation with categories and tags (editing limited to basic journal interface)
- [x] **Weather Module Support**: Verified Simple Weather integration
- [x] **Enhanced API**: Complete widget and hook systems
- [ ] **Complete Notes Editing**: Calendar-aware note editing interface for metadata management (disabled pending implementation)
- [x] **Documentation Quality**: Comprehensive API and developer guides
- [x] **Performance Optimization**: Efficient handling of large note collections

### Phase 3 Goals 🔮
- [ ] **Feature Leadership**: Advanced calendar features for Foundry v13+
- [ ] **Developer Ecosystem**: Multiple modules with native S&S integration
- [ ] **Feature Completeness**: Complete Simple Calendar feature parity
- [ ] **Community Growth**: Self-sustaining community contributions

---

## 🤝 Community Involvement

### How to Contribute

#### **For Users**
- **Beta Testing**: Try new features and report issues
- **Feedback**: Share suggestions and use cases
- **Documentation**: Help improve guides and examples
- **Community Support**: Help other users in discussions

#### **For Developers**
- **Module Integration**: Create integrations with your modules
- **Bug Reports**: Submit detailed issue reports
- **Feature Requests**: Propose new functionality
- **Code Contributions**: Submit PRs for improvements

#### **For Content Creators**
- **Calendar Creation**: Design calendars for different settings
- **Documentation**: Create tutorials and guides
- **Testing**: Validate calendar accuracy and usability
- **Promotion**: Share with your communities

### Contribution Guidelines

#### **Issue Reporting**
```markdown
**Environment**
- Foundry Version: [e.g. v11.315]
- Seasons & Stars Version: [e.g. 1.0.0]
- Browser: [e.g. Chrome 120]
- Other Modules: [list relevant modules]

**Expected Behavior**
[What should happen]

**Actual Behavior**
[What actually happens]

**Steps to Reproduce**
1. [First step]
2. [Second step]
3. [See error]

**Console Errors**
[Any JavaScript errors from browser console]
```

#### **Feature Requests**
- **Use Case**: Describe the problem you're trying to solve
- **Proposed Solution**: Your suggested approach
- **Alternatives**: Other solutions you've considered
- **Impact**: Who would benefit from this feature
- **Priority**: How important is this to your workflow

---

## 🔄 Version Strategy

### Release Cycle
- **Major Releases**: Every 6 months (Phase milestones)
- **Minor Releases**: Monthly feature additions
- **Patch Releases**: Weekly bug fixes as needed
- **Beta Releases**: Continuous for testing new features

### Versioning Scheme
- **1.x.x**: Phase 1 releases (Foundation)
- **2.x.x**: Phase 2 releases (Integration & Notes)
- **3.x.x**: Phase 3 releases (Advanced Features)
- **4.x.x**: Phase 4 releases (Community & Ecosystem)

### Compatibility Promise
- **API Stability**: No breaking changes within major versions
- **Migration Support**: Automated migration tools for major upgrades
- **Deprecation Policy**: 6-month notice for deprecated features
- **Legacy Support**: Previous major version supported for 1 year

---

## 📈 Long-term Vision (2025+)

### **Advanced Calendar Features**
Seasons & Stars aims to become the definitive calendar and timekeeping solution for Foundry VTT, focusing on:

#### **Enhanced Foundry Integration** 🌐
- **Deep System Integration**: Native game system calendar features
- **Advanced Automation**: Smart event scheduling and triggers
- **Campaign Tools**: Enhanced campaign management integration
- **Performance Optimization**: Scalable architecture for large campaigns

#### **Feature Expansion** 🚀
- **Astronomical Calculations**: Real celestial mechanics
- **Weather Generation**: Integrated weather systems
- **Event Automation**: Smart event scheduling and triggers
- **Campaign Integration**: Deep integration with campaign management

#### **Community Ecosystem** 🌍
- **Calendar Library**: Thousands of community calendars
- **Developer Marketplace**: Third-party integrations and tools
- **Educational Resources**: Tutorials, courses, and certification
- **Professional Services**: Custom calendar development and consulting

---

## 📞 Stay Connected

### **Development Updates**
- **GitHub Releases**: Detailed changelog for every release
- **Discord Channel**: `#seasons-and-stars` in Foundry community
- **Blog Posts**: Monthly development updates
- **Live Streams**: Quarterly development streams

### **Feedback Channels**
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General discussion and support
- **Discord**: Real-time community chat
- **Reddit**: `/r/FoundryVTT` with S&S flair

### **Documentation**
- **User Guide**: Comprehensive usage instructions
- **Developer Guide**: Complete API reference
- **Migration Guide**: Simple Calendar transition help
- **Examples Repository**: Sample integrations and use cases

---

**Ready to shape the future of calendar systems in virtual tabletops?** Join our community and help us build the next generation of timekeeping tools for RPGs!