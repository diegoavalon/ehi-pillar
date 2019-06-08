module.exports = {
    theme: {
        colors: {
            black: "var(--black)",
            white: "var(--white)",
            "grey-dark": "var(--grey-dark)",
            grey: "var(--grey)",
            "grey-light": "var(--grey-light)",
            primary: "var(--primary)",
            "primary-light": "var(--primary-light)",
            "primary-lightest": "var(--primary-lightest)",
            "func-primary": "var(--func-primary)",
            "func-secondary": "var(--func-secondary)",
            "func-secondary-light": "var(--func-secondary-light)"
        },
        spacing: {
            xxxxs: "calc(0.125 * var(--space-unit))",
            xxxs: "calc(0.25 * var(--space-unit))",
            xxs: "calc(0.375 * var(--space-unit))",
            xs: "calc(0.5 * var(--space-unit))",
            sm: "calc(0.75 * var(--space-unit))",
            base: "var(--space-unit)",
            md: "calc(1.25 * var(--space-unit))",
            lg: "calc(2 * var(--space-unit))",
            xl: "calc(3.25 * var(--space-unit))",
            xxl: "calc(5.25 * var(--space-unit))",
            xxxl: "calc(8.5 * var(--space-unit))",
            xxxxl: "calc(13.75 * var(--space-unit))",
            component: "calc(1.25 * var(--space-unit))"
        },
        width: {
            "1-2": "50%",
            "1-3": "33.33333%",
            "2-3": "66.66667%",
            "1-4": "25%",
            "3-4": "75%",
            "1-5": "20%",
            "2-5": "40%",
            "3-5": "60%",
            "4-5": "80%",
            "1-6": "16.66667%",
            "5-6": "83.33333%",
            full: "100%",
            screen: "100vw"
        },
        opacity: {
            "0": "0",
            "20": "0.2",
            "40": "0.4",
            "60": "0.6",
            "80": "0.8",
            "100": "1"
        },
        borderRadius: {
            none: "0",
            sm: "5px",
            default: "10px",
            lg: "15px",
            full: "9999px"
        },
        screens: {
            phone: "calc(600px + 40px)",
            tablet: "calc(768px + 80px)",
            laptop: "calc(1024px + 120px)",
            desktop: "calc(1200px + 200px)"
        },
        fontWeight: {
            regular: "400",
            "semi-bold": "600",
            black: "900"
        },
        boxShadow: {
            "1dp":
                "0 1px 1px 0 rgba(47, 105, 252, .08), 0 2px 1px -1px rgba(47, 105, 252, .08), 0 1px 3px 0 rgba(47, 105, 252, .12)",
            "2dp":
                "0 2px 2px 0 rgba(47, 105, 252, .08), 0 3px 1px -2px rgba(47, 105, 252, .08), 0 1px 5px 0 rgba(47, 105, 252, .12)",
            "3dp":
                "0 3px 4px 0 rgba(47, 105, 252, .08), 0 3px 3px -2px rgba(47, 105, 252, .08), 0 1px 8px 0 rgba(47, 105, 252, .12)",
            "4dp":
                "0 4px 5px 0 rgba(47, 105, 252, .08), 0 1px 10px 0 rgba(47, 105, 252, .08), 0 2px 4px -1px rgba(47, 105, 252, .12)",
            "6dp":
                "0 6px 10px 0 rgba(47, 105, 252, .08), 0 1px 18px 0 rgba(47, 105, 252, .08), 0 3px 5px -1px rgba(47, 105, 252, .12)",
            "8dp":
                "0 8px 10px 1px rgba(47, 105, 252, .08), 0 3px 14px 2px rgba(47, 105, 252, .08), 0 5px 5px -3px rgba(47, 105, 252, .12)",
            "9dp":
                "0 9px 12px 1px rgba(47, 105, 252, .08), 0 3px 16px 2px rgba(47, 105, 252, .08), 0 5px 6px -3px rgba(47, 105, 252, .12)",
            "12dp":
                "0 12px 17px 2px rgba(47, 105, 252, .08), 0 5px 22px 4px rgba(47, 105, 252, .08), 0 7px 8px -4px rgba(47, 105, 252, .12)",
            "16dp":
                "0 16px 24px 2px rgba(47, 105, 252, .08), 0 6px 30px 5px rgba(47, 105, 252, .08), 0 8px 10px -5px rgba(47, 105, 252, .12)",
            "24dp":
                "0 24px 38px 3px rgba(47, 105, 252, .08), 0 9px 46px 8px rgba(47, 105, 252, .08), 0 11px 15px -7px rgba(47, 105, 252, .12)"
        },
        margin: theme => ({
            auto: "auto",
            ...theme("spacing")
        })
    },
    variants: {},
    corePlugins: {
        fontSize: false,
        letterSpacing: false,
        lineHeight: false,
        negativeMargin: false
    },
    plugins: []
};
