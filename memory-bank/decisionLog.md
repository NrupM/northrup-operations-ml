# Decision Log

This file records architectural and implementation decisions using a list format.
2025-05-21 19:22:52 - Initial environment setup decisions

## Decision

* Update Node.js version to v18.19.1 to meet pnpm requirements
* Use nvm for Node.js version management
* Maintain development environment configuration in version control

## Rationale 

* pnpm requires Node.js v18.12 or higher
* nvm provides flexible version management for Node.js
* Version control ensures consistent development environment across team

## Implementation Details

* Used nvm to install and switch to Node.js v18.19.1
* Package.json specifies Next.js 15.3.2 and React 19
* Development scripts defined in package.json for standardized commands
[2025-05-21 19:32:14] - CSS Framework Change

## Decision

* Switched from Tailwind CSS to Regular CSS
* Removed Tailwind configuration
* Implemented semantic CSS classes

## Rationale

* Simplified styling approach
* Better maintainability with semantic class names
* Direct control over styles without utility classes

## Implementation Details

* Removed postcss.config.mjs
* Created semantic CSS classes in globals.css
* Updated component styling to use new CSS classes
* Maintained consistent visual design while improving code readability