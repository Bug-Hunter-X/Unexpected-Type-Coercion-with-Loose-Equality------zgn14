function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  // Use strict equality for type-safe comparisons
  if (a === 0 && b === false) {
    // ... handle this specific case if needed
  }
  // ... rest of the function using === for comparisons
}