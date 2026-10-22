# Component completeness and 5-state matrix

Every interactive component or data view must implement all five states before it is marked complete:

1. **Ideal state**: Populated with realistic domain records (varied name lengths, Arabic/Latin scripts, realistic numbers).
2. **Empty state**: Explains why the list is empty and provides the single primary button to create the first record.
3. **Loading state**: Preserves exact layout geometry using subtle static placeholders—never jump layout height when data arrives.
4. **Error state**: States the exact failure (`HTTP 504 from customs tariff service`), confirms no user input was lost, and offers a `Retry` button.
5. **Edge-case / overflow state**: Handles 60-character unbroken strings, `0` counts, and `99,999,999.00` currency totals without overlapping sibling cells.
