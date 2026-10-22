# Texture and material honesty

Replace synthetic glowing blurs and radial dot-grids with honest surface treatments:

1. **Warm paper contrast**: Step between `#f6f4f0` (page background) and `#efeae1` (inset specification well) using a `1px solid #dcd6cb` border.
2. **Tabular hairline rules**: Use exposed `1px` grid hairlines (Swiss timetable / broadsheet style) to organize complex numbers without card drop shadows.
3. **Zero fake glass**: Do not use `backdrop-filter: blur()` unless an overlay floats above live user-scrolled media or map tiles.
