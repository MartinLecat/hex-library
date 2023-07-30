export const log = console.log.bind(
    window.console,
    "%c[Hex]",
    "color: lightblue;"
);
export const error = console.error.bind(
    window.console,
    "%c[Hex]",
    "color: red;"
);
