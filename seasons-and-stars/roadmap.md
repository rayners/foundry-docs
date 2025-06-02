---
title: Roadmap
---

# Roadmap

Development timeline and planned features for Seasons & Stars calendar system.

## 🎯 Vision Statement

Seasons & Stars aims to be the **modern, reliable, and extensible** calendar solution for Foundry VTT, providing:
- **Seamless migration** from Simple Calendar
- **Enhanced user experience** with modern UI/UX
- **Robust developer API** for module integration
- **Community-driven development** based on real user needs

## 📅 Development Phases

## ✅ Phase 1: Foundation (Complete)
*Beta Release - Q4 2024*

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

## ✅ Phase 2: Integration & Notes (Q4 2024 - COMPLETE)
*Enhanced Compatibility Release*

### Notes System ✅
- [x] **Complete Notes Implementation**
  - [x] Journal entry integration for persistent storage
  - [x] Note categories with customizable colors (8 default + custom)
  - [x] Date range support (multi-day events)
  - [x] Recurring events (daily, weekly, monthly, yearly)
  - [x] User visibility permissions (GM/player/specific users)
  - [x] Search functionality with filtering
  - [x] Performance optimization for large note collections
  - [x] Module flag support for external data storage

- [x] **Weather Module Support**
  - [x] Full Simple Calendar notes API compatibility
  - [x] Weather detail storage and retrieval
  - [x] Module-specific data persistence (Simple Weather tested)
  - [x] Integration examples for popular weather modules
  - [x] 100% compatibility verified with Simple Weather

- [x] **Advanced Event Management**
  - [x] Note categories and tagging system
  - [x] Advanced search with multi-criteria filtering
  - [x] Calendar grid integration with visual indicators
  - [x] Real-time note creation from calendar interface

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

## 🚧 Phase 3: Advanced Features (Q1 2025)
*Full-Featured Release*

### Calendar Creation & Management 🔮
- [ ] **In-App Calendar Editor**
  - Visual calendar designer
  - Month and weekday customization
  - Leap year rule configuration
  - Cultural description editor
  - Real-time preview system

- [ ] **Calendar Import/Export**
  - JSON format standardization
  - Simple Calendar migration tools
  - Community calendar sharing
  - Batch calendar operations

- [ ] **Advanced Calendar Features**
  - Multiple concurrent calendars
  - Calendar conversion tools
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

## 🔮 Phase 4: Community & Ecosystem (Q3 2025)
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
- [x] **System Agnostic** - Works with all systems
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

## 📊 Success Metrics

### Phase 1 Targets ✅
- [x] **Installation Rate**: 500+ installs in first month
- [x] **Compatibility**: 90%+ existing weather modules work
- [x] **User Satisfaction**: Positive feedback from beta testers
- [x] **Performance**: Faster than Simple Calendar in benchmarks

### Phase 2 Targets ✅
- [x] **Complete Notes System**: Full implementation with 100% Simple Calendar compatibility
- [x] **Weather Module Support**: Verified Simple Weather integration
- [x] **Enhanced API**: Complete widget and hook systems
- [x] **Documentation Quality**: Comprehensive API and developer guides
- [x] **Performance Optimization**: Sub-100ms performance for 1000+ notes

### Phase 3 Targets 🔮
- [ ] **Market Position**: Leading calendar solution for Foundry v13+
- [ ] **Developer Adoption**: 10+ modules with native S&S integration
- [ ] **Feature Completeness**: 100% Simple Calendar feature parity
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

### **The Ultimate Calendar Solution**
Seasons & Stars aims to become the definitive calendar and timekeeping solution for virtual tabletops, expanding beyond Foundry VTT to:

#### **Platform Expansion** 🌐
- **Roll20 Integration**: Bring S&S to other VTT platforms
- **Standalone Application**: Desktop/mobile apps for campaign planning
- **Web Integration**: Browser-based calendar tools
- **API Services**: Cloud-based calendar synchronization

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