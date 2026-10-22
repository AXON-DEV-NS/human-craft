# Spacing scale and 12-column grid

## Base-4 / Base-8 spatial scale

- `--space-1`: `0.25rem` (`4px`) — inline icon gap
- `--space-2`: `0.50rem` (`8px`) — tight chip padding
- `--space-3`: `0.75rem` (`12px`) — input vertical padding
- `--space-4`: `1.00rem` (`16px`) — standard card padding on mobile
- `--space-5`: `1.50rem` (`24px`) — grid column gap
- `--space-6`: `2.00rem` (`32px`) — desktop panel padding
- `--space-7`: `3.00rem` (`48px`) — compact section padding
- `--space-8`: `4.50rem` (`72px`) — standard section padding
- `--space-9`: `6.50rem` (`104px`) — open editorial pause

## Breaking symmetry intentionally

Use an asymmetric `4 + 8` or `5 + 7` column split on desktop (`grid-template-columns: repeat(12, minmax(0, 1fr))`) instead of repeating `grid-cols-3` on every row.
