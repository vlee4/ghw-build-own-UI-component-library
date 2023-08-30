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
- [Vitest Configuration](https://vitest.dev/guide/#configuring-vitest)
- [React Testing Library API](https://testing-library.com/docs/react-testing-library/api)
- [Jest-dom matchers](https://github.com/testing-library/jest-dom/)

- GHW Workshop: Build Your Own UI Component Library
  - [Part 1](https://www.youtube.com/watch?v=_5JZgTjKydU)
  - [Part 2](https://www.youtube.com/watch?v=NmziiKvFqDg)
  - [Part 3](https://www.youtube.com/watch?v=ohQS6XL9P8Q)

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

- [ ] 2 - TODO - During build Typescript's compiler (tsc) throws an error for the following line in `App.tsx`:

  ```
  import {Button} from "ghw-components-library-vl-test"
  ```

  and the following line in `Button.tsx`:

  ```
  import classNamesUtil from "./classNamesUtil";

  ```

  For the meantime, I've included a line for the tsc to ignore these.

  - [x] The reason why there's an error for the first import (cannot find module) is because in the build process `ghw-components-library-v1-test` is only created after the tsc checks for errors, as such, it makes sense that the compiler is unable to find that file. For now, I think this error is dismissable, because we are only importing `ghw-components-library-v1-test` into `App.tsx` in the first place in order to test whether our built component works. This situation shouldn't occur if someone where to use the UI library component I made.

  - [ ]The second import complains that `classNamesUtil` is imported but not used, which is true. Strangely enough, the streamer who led this project suggested that just by importing this utility function, it would be used. This could use some extra investigation honestly.

- **3** - If we were ever to publish this to npm it should be noted that `ghw-components-library-vl-test` should be uninstalled first. If it's not then there will be a circular dependency in the package. Also the `node_modules` and `package-lock.json` should be removed, as users will set that up in their own projects.
  All this can be done with `npm run publish:lib`.

  - Something else to note is that an npm account will have to be made to publish the package. Then, `npm login` should be run, so that when the package is published it will be under that account.

- **4** - I ran into an issue where I was getting a TypeError in `setup.ts` over the `expect.extend`. It said `TypeError: Cannot convert undefined or null to object`. This seems to be due to a breaking change involving `extend-expect`, so using `import * as matchers from '@testing-library/jest-dom/matchers` was suggested to fix this.
  https://github.com/testing-library/jest-dom/issues/439#issuecomment-1697873727

The different import is also referenced here in the Jest-dom readme: https://github.com/testing-library/jest-dom#with-another-jest-compatible-expect
