import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        include: [
            'packages/wdio-logger/**/*.test.ts',
            'packages/wdio-utils/**/*.test.ts',
            'packages/wdio-config/**/*.test.ts',
            'packages/wdio-reporter/**/*.test.ts',
            'packages/wdio-repl/**/*.test.ts',
            'packages/wdio-runner/**/*.test.ts',
            'packages/webdriver/**/*.test.ts',
            'packages/devtools/**/*.test.ts',
            'packages/wdio-allure-reporter/**/*.test.ts',
            'packages/wdio-appium-service/**/*.test.ts',
            'packages/wdio-browserstack-service/**/*.test.ts',
            'packages/wdio-concise-reporter/**/*.test.ts',
            'packages/wdio-crossbrowsertesting-service/**/*.test.ts',
            'packages/wdio-cucumber-framework/**/*.test.ts',
            'packages/wdio-dot-reporter/**/*.test.ts',
            'packages/wdio-firefox-profile-service/**/*.test.ts',
            'packages/wdio-junit-reporter/**/*.test.ts',
            'packages/wdio-local-runner/**/*.test.ts',
            'packages/wdio-sauce-service/**/*.test.ts',
            'packages/wdio-selenium-standalone-service/**/*.test.ts',
            'packages/wdio-shared-store-service/**/*.test.ts',
            'packages/wdio-spec-reporter/**/*.test.ts',
            'packages/wdio-static-server-service/**/*.test.ts',
            'packages/wdio-sumologic-reporter/**/*.test.ts',
            'packages/wdio-testingbot-service/**/*.test.ts'
        ],
        coverage: {
            enabled: false,
            exclude: ['**/build/**', '**/*.test.ts'],
            lines: 90,
            functions: 90,
            branches: 90,
            statements: 90
        }
    }
})
