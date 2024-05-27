# Context API Example

Context API example using TypeScript and custom Provider/Consumer

## The AppContextProvider

Check [src/contexts/AppContext.tsx](src/contexts/AppContext.tsx) for the definition and [App.tsx](App.tsx) for usage.

## The consumers

There are two examples of consumers in this project:

- [src/components/Control.tsx](src/components/Control.tsx) for usage with the **useContext** hook: `const app = useContext(AppContext);`
- [src/components/Timeline.tsx](src/components/Timeline.tsx) for usage with the custom **useAppContext** hook.

## Tip

This is a didactic example, but ideally, you should not export AppContext in [src/contexts/AppContext.tsx](src/contexts/AppContext.tsx), but only the providr **AppContextProvider** and the consumer **useAppContext**. This way, external users will not have unnecessary imports to choose.

## Extra

[outdated but can be useful] PT-BR Lesson: https://youtu.be/niTUo4u1xlY
