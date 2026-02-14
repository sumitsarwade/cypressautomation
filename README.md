# Cypress Project Template Creation Prompt

## Objective
Create a comprehensive, industry-standard Cypress end-to-end testing framework template that is reusable across any web application. This template should serve as a foundation for any new project, requiring only minimal modifications to adapt to specific website requirements.

## Required Directory Structure

```
cypress-automation-framework/
├── cypress/
│   ├── e2e/
│   │   ├── tests/
│   │   │   └── sample.cy.js (example test using the framework)
│   ├── fixtures/
│   │   ├── testdata/
│   │   │   └── sampleData.json (example test data)
│   ├── pages/
│   │   ├── BasePage.js (base page class with core methods)
│   │   ├── CommonPage.js (common elements across all pages)
│   │   └── SamplePage.js (example page object - template only)
│   ├── support/
│   │   ├── commands/
│   │   │   ├── apiCommands.js (custom API commands)
│   │   │   ├── uiCommands.js (custom UI commands)
│   │   │   ├── validationCommands.js (custom validation commands)
│   │   │   └── index.js (imports all custom commands)
│   │   ├── actions/
│   │   │   ├── BaseActions.js (core reusable actions)
│   │   │   ├── FormActions.js (form-related actions)
│   │   │   ├── NavigationActions.js (navigation actions)
│   │   │   └── index.js (exports all actions)
│   │   ├── validations/
│   │   │   ├── BaseValidations.js (core validation methods)
│   │   │   ├── ElementValidations.js (element-specific validations)
│   │   │   ├── ApiValidations.js (API response validations)
│   │   │   └── index.js (exports all validations)
│   │   ├── utilities/
│   │   │   ├── Logger.js (logging utility)
│   │   │   ├── DataGenerator.js (test data generation)
│   │   │   ├── DateTimeHelper.js (date/time utilities)
│   │   │   ├── FileHandler.js (file operations)
│   │   │   └── index.js (exports all utilities)
│   │   ├── helpers/
│   │   │   ├── WaitHelper.js (custom wait strategies)
│   │   │   ├── ScreenshotHelper.js (screenshot management)
│   │   │   └── index.js (exports all helpers)
│   │   ├── constants/
│   │   │   ├── Timeouts.js (timeout constants)
│   │   │   ├── Messages.js (message constants)
│   │   │   ├── Urls.js (URL constants)
│   │   │   └── index.js (exports all constants)
│   │   ├── e2e.js (support file - loads before tests)
│   │   └── commands.js (main commands file)
│   ├── plugins/
│   │   └── index.js (plugin configuration)
│   ├── downloads/
│   ├── screenshots/
│   └── videos/
├── cypress.config.js (Cypress configuration)
├── .env (environment variables - template)
├── .env.example (example environment file)
├── .gitignore
├── package.json
├── README.md (comprehensive documentation)
└── jsconfig.json (JavaScript configuration for IntelliSense)
```

## Detailed Requirements

### 1. BasePage Class (`cypress/pages/BasePage.js`)
Create a base page class with the following **declared but not defined** methods (method signatures only):

**Element Interaction Methods:**
- `click(locator, options)`
- `type(locator, text, options)`
- `clear(locator)`
- `select(locator, value)`
- `check(locator)`
- `uncheck(locator)`
- `forceClick(locator)`
- `doubleClick(locator)`
- `rightClick(locator)`
- `hover(locator)`

**Element Retrieval Methods:**
- `getElement(locator)`
- `getElements(locator)`
- `getText(locator)`
- `getValue(locator)`
- `getAttribute(locator, attribute)`
- `getCssProperty(locator, property)`

**Visibility & State Methods:**
- `isVisible(locator)`
- `isHidden(locator)`
- `isEnabled(locator)`
- `isDisabled(locator)`
- `isChecked(locator)`
- `exists(locator)`
- `doesNotExist(locator)`

**Wait Methods:**
- `waitForElement(locator, timeout)`
- `waitForElementToBeVisible(locator, timeout)`
- `waitForElementToDisappear(locator, timeout)`
- `waitForTextToBePresent(locator, text, timeout)`
- `waitForPageLoad()`

**Navigation Methods:**
- `navigateTo(url)`
- `reload()`
- `goBack()`
- `goForward()`
- `getCurrentUrl()`
- `getTitle()`

**Window/Alert Methods:**
- `switchToWindow(windowIndex)`
- `closeWindow()`
- `acceptAlert()`
- `dismissAlert()`
- `getAlertText()`

**Scroll Methods:**
- `scrollToElement(locator)`
- `scrollToTop()`
- `scrollToBottom()`
- `scrollBy(x, y)`

**Utility Methods:**
- `takeScreenshot(filename)`
- `uploadFile(locator, filepath)`
- `downloadFile(locator)`
- `executeJavaScript(script, args)`

### 2. BaseActions Class (`cypress/support/actions/BaseActions.js`)
Declare the following action methods:

**Form Actions:**
- `fillForm(formData)`
- `submitForm(submitButtonLocator)`
- `resetForm(resetButtonLocator)`
- `selectDropdownOption(locator, option)`
- `selectMultipleOptions(locator, options)`

**Authentication Actions:**
- `login(username, password)`
- `logout()`
- `verifyLoginSuccess()`
- `verifyLogoutSuccess()`

**CRUD Actions:**
- `createRecord(data)`
- `readRecord(identifier)`
- `updateRecord(identifier, data)`
- `deleteRecord(identifier)`
- `searchRecord(searchTerm)`

**Table Actions:**
- `getTableData(tableLocator)`
- `getRowByIndex(tableLocator, rowIndex)`
- `getRowByText(tableLocator, text)`
- `sortTableByColumn(columnName)`
- `filterTable(filterCriteria)`

**File Actions:**
- `uploadSingleFile(fileLocator, filePath)`
- `uploadMultipleFiles(fileLocator, filePaths)`
- `downloadAndVerifyFile(downloadLocator, expectedFileName)`

### 3. BaseValidations Class (`cypress/support/validations/BaseValidations.js`)
Declare validation methods:

**Element Validations:**
- `validateElementVisible(locator, message)`
- `validateElementNotVisible(locator, message)`
- `validateElementExists(locator, message)`
- `validateElementNotExists(locator, message)`
- `validateElementEnabled(locator, message)`
- `validateElementDisabled(locator, message)`
- `validateElementText(locator, expectedText, message)`
- `validateElementContainsText(locator, expectedText, message)`
- `validateElementAttribute(locator, attribute, expectedValue, message)`

**URL & Title Validations:**
- `validateUrl(expectedUrl, message)`
- `validateUrlContains(partialUrl, message)`
- `validateTitle(expectedTitle, message)`
- `validateTitleContains(partialTitle, message)`

**Data Validations:**
- `validateResponseStatus(response, expectedStatus, message)`
- `validateResponseBody(response, expectedBody, message)`
- `validateArrayLength(array, expectedLength, message)`
- `validateObjectProperty(object, property, expectedValue, message)`

**Form Validations:**
- `validateFormData(formLocator, expectedData, message)`
- `validateInputValue(locator, expectedValue, message)`
- `validateCheckboxState(locator, expectedState, message)`
- `validateSelectedOption(locator, expectedOption, message)`
- `validateErrorMessage(locator, expectedMessage, message)`

**Count Validations:**
- `validateElementCount(locator, expectedCount, message)`
- `validateMinimumElementCount(locator, minimumCount, message)`
- `validateMaximumElementCount(locator, maximumCount, message)`

### 4. Custom Commands (`cypress/support/commands/`)

**UI Commands (`uiCommands.js`):**
- `cy.clickOn(locator, options)`
- `cy.typeText(locator, text, options)`
- `cy.clearField(locator)`
- `cy.selectOption(locator, value)`
- `cy.checkBox(locator)`
- `cy.uncheckBox(locator)`
- `cy.getElementText(locator)`
- `cy.waitForLoader(loaderLocator, timeout)`
- `cy.scrollToView(locator)`

**API Commands (`apiCommands.js`):**
- `cy.apiGet(url, options)`
- `cy.apiPost(url, body, options)`
- `cy.apiPut(url, body, options)`
- `cy.apiPatch(url, body, options)`
- `cy.apiDelete(url, options)`
- `cy.setAuthToken(token)`
- `cy.verifyApiResponse(response, expectedStatus, expectedBody)`

**Validation Commands (`validationCommands.js`):**
- `cy.verifyVisible(locator, message)`
- `cy.verifyNotVisible(locator, message)`
- `cy.verifyText(locator, expectedText, message)`
- `cy.verifyContainsText(locator, expectedText, message)`
- `cy.verifyUrl(expectedUrl, message)`
- `cy.verifyAttribute(locator, attribute, expectedValue, message)`
- `cy.verifyCount(locator, expectedCount, message)`

### 5. Logger Utility (`cypress/support/utilities/Logger.js`)
Implement comprehensive logging with methods:
- `info(message, data)`
- `error(message, error)`
- `warn(message, data)`
- `debug(message, data)`
- `step(stepDescription)`
- `logTestStart(testName)`
- `logTestEnd(testName, status)`
- `logApiRequest(method, url, payload)`
- `logApiResponse(status, response)`

**Requirements:**
- Console output with timestamps
- File-based logging (optional)
- Different log levels
- Colored output for different log types
- Integration with Cypress test lifecycle

### 6. Configuration (`cypress.config.js`)
Include all essential configurations:
- Base URL (environment-specific)
- Viewport dimensions
- Timeout settings (default, page load, request)
- Video recording settings
- Screenshot settings
- Reporter configuration (mochawesome recommended)
- Browser settings
- Environment variables
- Retry configuration
- Test file patterns
- Support file paths
- Plugin configuration

### 7. Plugins (`cypress/plugins/index.js`)
Include commonly used plugins:
- `cypress-mochawesome-reporter` (reporting)
- `cypress-file-upload` (file upload handling)
- `cypress-xpath` (XPath support - optional)
- Environment variable configuration
- Custom task definitions

### 8. Constants

**Timeouts.js:**
```javascript
export const TIMEOUTS = {
    SHORT: // declare value,
    MEDIUM: // declare value,
    LONG: // declare value,
    EXTRA_LONG: // declare value,
    DEFAULT: // declare value,
    PAGE_LOAD: // declare value,
    API: // declare value
}
```

**Messages.js:**
- Success messages
- Error messages
- Validation messages
- Info messages

**Urls.js:**
- Environment-based URL management
- API endpoints
- External URLs

### 9. Helpers

**WaitHelper.js:**
- `waitForCondition(condition, timeout, message)`
- `waitForElementState(locator, state, timeout)`
- `waitForApiResponse(requestAlias, timeout)`
- `waitForNavigation(timeout)`

**ScreenshotHelper.js:**
- `captureScreenshot(name, options)`
- `captureFullPageScreenshot(name)`
- `captureElementScreenshot(locator, name)`
- `compareScreenshots(baseline, current)`

**FileHandler.js:**
- `readJsonFile(filepath)`
- `writeJsonFile(filepath, data)`
- `readTextFile(filepath)`
- `writeTextFile(filepath, content)`
- `deleteFile(filepath)`
- `fileExists(filepath)`

### 10. Sample Page Object (`cypress/pages/SamplePage.js`)
Create a template page object demonstrating:
- Proper inheritance from BasePage
- Locator definitions using getter methods
- Action methods that combine BasePage methods
- Page-specific validations
- Comments explaining the structure

### 11. Sample Test (`cypress/e2e/tests/sample.cy.js`)
Create an example test showcasing:
- Test structure (describe, context, it blocks)
- Before/after hooks
- Usage of page objects
- Usage of custom commands
- Usage of actions and validations
- Logger integration
- Test data from fixtures
- Assertions
- Comments explaining best practices

### 12. Package.json Scripts
Include essential npm scripts:
- `test` - run all tests
- `test:chrome` - run in Chrome
- `test:firefox` - run in Firefox
- `test:edge` - run in Edge
- `test:headed` - run with browser UI
- `test:headless` - run headless
- `open` - open Cypress Test Runner
- `report` - generate and open test report
- `clean` - clean screenshots, videos, reports

### 13. Documentation (`README.md`)
Comprehensive documentation including:
- Project overview
- Installation instructions
- Folder structure explanation
- How to create new page objects
- How to create new tests
- How to use custom commands
- How to use actions and validations
- Configuration guidelines
- Running tests
- Reporting
- Best practices
- Troubleshooting

### 14. Environment File (`.env.example`)
Template for environment variables:
- `BASE_URL`
- `API_BASE_URL`
- `TEST_USERNAME`
- `TEST_PASSWORD`
- `ENVIRONMENT` (dev/staging/prod)
- `BROWSER`
- `HEADLESS`

### 15. JSConfig.json
Configure for IntelliSense:
- Path mappings for imports
- Include/exclude patterns
- Compiler options for better IDE support

## Implementation Guidelines

### Code Quality Requirements:
1. **All methods must be declared but not defined** - provide method signatures with comments explaining purpose and parameters
2. Use **ES6+ syntax** (classes, arrow functions, destructuring, template literals)
3. Follow **consistent naming conventions**:
   - Classes: PascalCase
   - Methods: camelCase
   - Constants: UPPER_SNAKE_CASE
   - Files: PascalCase for classes, camelCase for utilities
4. Add **JSDoc comments** for all classes and methods
5. Include **inline comments** explaining the purpose of each method
6. Use **descriptive parameter names**
7. Implement **error handling patterns** (try-catch blocks where applicable)
8. Follow **DRY principles** (Don't Repeat Yourself)

### Method Declaration Format:
```javascript
/**
 * Method description
 * @param {type} paramName - Parameter description
 * @param {type} optionalParam - Optional parameter description
 * @returns {type} Return value description
 * @example
 * // Usage example
 */
methodName(paramName, optionalParam = defaultValue) {
    // TODO: Implement method logic
    // This method should: [explain what it should do]
    throw new Error('Method not implemented. Override in child class or implement as needed.');
}
```

### Architecture Principles:
1. **Separation of Concerns** - Clear distinction between pages, actions, validations, and tests
2. **Reusability** - All components should be reusable across projects
3. **Maintainability** - Easy to understand and modify
4. **Scalability** - Can grow with project needs
5. **Flexibility** - Adaptable to different websites and requirements

### Additional Requirements:
1. Include `.gitignore` with appropriate exclusions (node_modules, cypress/videos, cypress/screenshots, .env, etc.)
2. All imports should use relative paths or path aliases
3. Implement proper exception handling in all methods
4. Include timeout parameters with default values
5. Support for multiple environments (dev, staging, production)
6. Cross-browser compatibility considerations
7. Include example fixture data demonstrating various data types
8. Add comments explaining where customization is needed for new projects

## Expected Deliverables

Generate a complete, production-ready Cypress framework with:
1. All files and folders as specified in the directory structure
2. Fully declared (but not defined) methods in all base classes
3. Properly configured plugins and dependencies in package.json
4. Working configuration files
5. Comprehensive README with setup and usage instructions
6. Example implementations showing how to extend the framework
7. Industry-standard best practices throughout
8. Comments and documentation explaining customization points

## Success Criteria

The generated template should:
- ✅ Be ready to use for any new web application with minimal changes
- ✅ Follow industry-standard best practices
- ✅ Include all necessary files and configurations
- ✅ Have clear separation of concerns
- ✅ Be well-documented with comments and README
- ✅ Support multiple environments and browsers
- ✅ Include comprehensive logging
- ✅ Have reusable components (pages, actions, validations, commands)
- ✅ Provide example implementations for reference
- ✅ Be scalable and maintainable
- ✅ Include all required npm packages in package.json
- ✅ Work out of the box after running `npm install`

---

**Note:** This template is designed to be framework-agnostic for the website under test. All website-specific implementations should be added by extending the base classes and customizing page objects according to the specific application's needs.
