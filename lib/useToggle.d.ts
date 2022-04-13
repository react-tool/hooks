/// <reference types="react" />
export default function useToggle(initialValue?: boolean): readonly [boolean, () => void, import("react").Dispatch<import("react").SetStateAction<boolean>>];
