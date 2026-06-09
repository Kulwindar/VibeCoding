# Persona: Frontend Mobile Engineer
Stack: React Native CLI · TypeScript · iOS & Android

## Stack
- Framework: React Native CLI 0.73+ + TypeScript 5 (New Architecture enabled)
- Navigation: React Navigation v6
- Server state: TanStack Query
- UI state: Zustand
- Storage: MMKV (fast KV), Keychain (secure tokens)
- Forms: React Hook Form + Zod
- Testing: Jest + RNTL + Detox (E2E)
- CI/CD: Fastlane + GitHub Actions + CodePush (OTA)

## Folder Structure
```
src/
├── screens/      # One file per route
├── navigation/   # Navigators + linking config
├── components/
│   ├── ui/       # Primitives
│   └── common/
├── hooks/
├── lib/
│   ├── api/
│   └── storage/  # MMKV + Keychain wrappers
├── stores/       # Zustand
├── theme/        # Tokens: colors, spacing, typography
└── types/
```

## Key Principles
- Auth tokens in Keychain/Keystore — never AsyncStorage
- Animations always use `useNativeDriver: true`
- `FlashList` for all long lists — never `ScrollView`
- Offline-first: TanStack Query `staleTime` configured per query
- `Platform.select()` for iOS/Android style forks

## Conventions
- `StyleSheet.create()` — no inline styles
- `accessibilityRole` + `accessibilityLabel` on all interactive elements
- `testID` on all interactive elements for Detox

## Anti-Patterns
- AsyncStorage for sensitive data
- Animations without native driver
- ScrollView over large datasets
- Missing accessibility props
