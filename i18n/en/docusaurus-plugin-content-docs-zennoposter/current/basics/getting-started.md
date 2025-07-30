# Quick Start

Let's create a simple project to automate Google search.

## Creating Your First Project

1. **Open ProjectMaker** - the main project editor
2. **Add "Navigate" action** - to open Google
3. **Set URL**: `https://google.com`
4. **Add "Type Text" action** in the search box
5. **Add "Click" action** on the search button

## Example Action Code

```xml
<template>
  <action name="Navigate" url="https://google.com" />
  <action name="Type" element="input[name='q']" text="ZennoPoster" />
  <action name="Click" element="input[value='Google Search']" />
</template>
```

## Running the Project

- Press **F5** for test run
- Make sure all actions execute correctly
- Save project (Ctrl+S)

---

🎉 **Congratulations!** You've created your first ZennoPoster project. 