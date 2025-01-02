# Expo useMountedState Hook Issue
This repository demonstrates a potential issue with the Expo `useMountedState` hook when used in conjunction with `useEffect` having an empty dependency array.  The `useMountedState` hook might not correctly update its value, which can result in stale closures or unexpected behavior. The solution offers a way to properly manage state updates.

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `expo start`.
5. Observe the behavior as described in the `bug.js` file.

## Solution
The provided solution (`bugSolution.js`) demonstrates how to handle this issue.  See the comments within the file for explanation.