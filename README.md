# Global Hack Week : Build your own UI Component Library

This is a Global Hack Week project aimed at creating a UI Component Library utilizing:

- Vite
- React
- Tailwind-CSS

# Setup

1. Make sure to `npm install` while in the root directory
2. To run the project, enter `npm run dev` into the terminal

# Development

To test locally whether the library is working correctly or not, follow these steps:

1. Locally build the project with `npm run build`
2. Run `npm pack` to create a tarball. A file something like `ghw-components-library-vl-test-1.0.0.tgz` should be generated in the root directory.
3. Locally install the package with `npm add ghw-components-library-vl-test-1.0.0.tgz`. You should see the package added to `dependencies` in `package.json`.
   ...

# Resources

- [Vite Start-up Documentation](https://vitejs.dev/guide/#command-line-interface)
- [Tailwind CSS Installation Documentation](https://tailwindcss.com/docs/installation)

- GHW Workshop: Build Your Own UI Component Library
  - [Part 1](https://www.youtube.com/watch?v=_5JZgTjKydU)

# Useful Development References

- [Using React children props with Typescript](https://blog.logrocket.com/using-react-children-prop-with-typescript/)
- [Mirroring HTML Element with React Typescript](https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/)

# Notes

- [x] **1 - Resolved** : There is currently a problem with applying classnames to the custom components. The classes applied to the `Button` component are applied when built and loaded in the dev environment, but if changed to other valid Tailwind CSS classes, while they show up in the browser inspector, they won't apply any actual styles. This occurs when changing the classes within the Button component file and when utilizing the Button component and passing classnames to that implementation.

- This may have something to do with how the project is built / optimized. I'm guessing not all tailwind classes are loaded into the project after we've built the project and thus are not recognized when we change the classes, even if we are only changing the dev environment version.

- The above reasoning seems to be correct. During build time, postCSS scans the project for classes used and includes them in the `style.css` file in the `dist` folder. These included styles are the "default ship styles" that will be included upon use of our UI library component.

In `App.tsx` we are simulating the use of our UI library component, as we are pulling styles via the line:

```
import "ghw-components-library-vl-test/dist/style.css"
```

As such we will only have access to the styles already included in the build. To expand our access to additional Tailwind styles we would have to import the lines found in `App.css` again. That is:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
