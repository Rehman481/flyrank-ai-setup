# AI Workflow Comparison

## Overview

For this exercise, I implemented the same settings form using two different prompting strategies to compare the quality of AI-generated code.

### Round One – Vague Prompt

The first implementation used a simple prompt asking the AI to generate a settings form. The generated result contained only a Full Name field, Email field, and a Save button. While it worked, the implementation lacked important features such as validation, accessibility, password fields, proper labels, and error handling. The code also required manual review to improve usability and user experience.

### Round Two – Precise Prompt

The second implementation used a detailed prompt describing the expected functionality, project constraints, and verification requirements. The prompt specified React with TypeScript, proper form validation, accessibility improvements, labels, password confirmation, a theme selector, and improved UI styling.

The generated implementation was significantly better. It included validation for required fields, email format checking, password length validation, password confirmation, accessible labels, aria-invalid attributes, and a working theme selector. The code was easier to review and required fewer manual corrections.

## Comparison

The precise prompt produced code that was more complete, easier to maintain, and closer to production quality. The vague prompt generated only the basic functionality and left many important edge cases unhandled.

## AI Mistake Found

One issue I noticed was that the initial implementation of the theme selector only displayed the dropdown but did not actually switch between light and dark themes. I manually corrected this by adding theme state management and conditional styling.

## Lessons Learned

Providing detailed requirements leads to significantly better AI-generated code. Including project constraints, expected behavior, accessibility requirements, and validation rules reduces manual corrections and improves code quality. Reviewing AI-generated code is still necessary, but precise prompts greatly reduce review effort.