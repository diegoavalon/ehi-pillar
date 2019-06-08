export default [
    {
        screens: {
            description: `eHealth's responsive breakpoints`,
            classes: [
                {
                    name: `phone`,
                    value: `calc(600px + 40px)`
                },
                {
                    name: `tablet`,
                    value: `calc(768px + 80px)`
                },
                {
                    name: `laptop`,
                    value: `calc(1024px + 120px)`
                },
                {
                    name: `desktop`,
                    value: `calc(1200px + 200px`
                }
            ]
        },
        backgroundColor: {
            description: `Values for the background-color property`,
            classes: [
                {
                    name: `.bg-black`,
                    value: `background-color: var(--black)`
                },
                {
                    name: `.bg-white`,
                    value: `background-color: var(--white)`
                },
                {
                    name: `.bg-grey-dark`,
                    value: `background-color: var(--grey-dark)`
                },
                {
                    name: `.bg-grey`,
                    value: `background-color: var(--grey)`
                },
                {
                    name: `.bg-grey-light`,
                    value: `background-color: var(--grey-light)`
                },
                {
                    name: `.bg-primary`,
                    value: `background-color: var(--primary)`
                },
                {
                    name: `.bg-primary-light`,
                    value: `background-color: var(--primary-light)`
                },
                {
                    name: `.bg-primary-lightest`,
                    value: `background-color: var(--primary-lightest)`
                },
                {
                    name: `.bg-func-primary`,
                    value: `background-color: var(--func-primary)`
                },
                {
                    name: `.bg-func-secondary`,
                    value: `background-color: var(--func-secondary)`
                },
                {
                    name: `.bg-func-secondary-light`,
                    value: `background-color: var(--func-secondary-light)`
                }
            ]
        },
        backgroundPosition: {
            description: `Values for the background-position property`,
            classes: [
                {
                    name: `.bg-bottom`,
                    value: `background-position: bottom`
                },
                {
                    name: `.bg-center`,
                    value: `background-position: center`
                },
                {
                    name: `.bg-left`,
                    value: `background-position: left`
                },
                {
                    name: `.bg-left-bottom`,
                    value: `background-position: left bottom`
                },
                {
                    name: `.bg-left-top`,
                    value: `background-position: left top`
                },
                {
                    name: `.bg-right`,
                    value: `background-position: right`
                },
                {
                    name: `.bg-right-bottom`,
                    value: `background-position: right bottom`
                },
                {
                    name: `.bg-right-top`,
                    value: `background-position: right top`
                },
                {
                    name: `.bg-top`,
                    value: `background-position: top`
                }
            ]
        },
        backgroundSize: {
            description: `Values for the background-size property`,
            classes: [
                {
                    name: `.bg-repeat`,
                    value: `background-repeat: repeat`
                },
                {
                    name: `.bg-no-repeat`,
                    value: `background-repeat: no-repeat`
                },
                {
                    name: `.bg-repeat-x`,
                    value: `background-repeat: repeat-x`
                },
                {
                    name: `.bg-repeat-y`,
                    value: `background-repeat: repeat-y`
                },
                {
                    name: `.bg-repeat-round`,
                    value: `background-repeat: round`
                },
                {
                    name: `.bg-repeat-space`,
                    value: `background-repeat: space`
                },
                {
                    name: `.bg-auto`,
                    value: `background-size: auto`
                },
                {
                    name: `.bg-cover`,
                    value: `background-size: cover`
                },
                {
                    name: `.bg-contain`,
                    value: `background-size: contain`
                }
            ]
        },
        borderColor: {
            description: `Values for the border-color property`,
            classes: [
                {
                    name: `.border-black`,
                    value: `border-color: var(--black)`
                },
                {
                    name: `.border-white`,
                    value: `border-color: var(--white)`
                },
                {
                    name: `.border-grey-dark`,
                    value: `border-color: var(--grey-dark)`
                },
                {
                    name: `.border-grey`,
                    value: `border-color: var(--grey)`
                },
                {
                    name: `.border-grey-light`,
                    value: `border-color: var(--grey-light)`
                },
                {
                    name: `.border-primary`,
                    value: `border-color: var(--primary)`
                },
                {
                    name: `.border-primary-light`,
                    value: `border-color: var(--primary-light)`
                },
                {
                    name: `.border-primary-lightest`,
                    value: `border-color: var(--primary-lightest)`
                },
                {
                    name: `.border-func-primary`,
                    value: `border-color: var(--func-primary)`
                },
                {
                    name: `.border-func-secondary`,
                    value: `border-color: var(--func-secondary)`
                },
                {
                    name: `.border-func-secondary-light`,
                    value: `border-color: var(--func-secondary-light)`
                }
            ]
        },
        borderRadius: {
            description: `Values for the border-radius property`,
            classes: [
                {
                    name: `.rounded-none`,
                    value: `border-radius: 0`
                },
                {
                    name: `.rounded-sm`,
                    value: `border-radius: 5px`
                },
                {
                    name: `.rounded`,
                    value: `border-radius: 10px`
                },
                {
                    name: `.rounded-lg`,
                    value: `border-radius: 15px`
                },
                {
                    name: `.rounded-full`,
                    value: `border-radius: 9999px`
                },
                {
                    name: `.rounded-t-none`,
                    value: `border-top-left-radius: 0;
					border-top-right-radius: 0`
                },
                {
                    name: `.rounded-r-none`,
                    value: `border-top-right-radius: 0;
					border-bottom-right-radius: 0`
                },
                {
                    name: `.rounded-b-none`,
                    value: `border-bottom-right-radius: 0;
					border-bottom-left-radius: 0`
                },
                {
                    name: `.rounded-l-none`,
                    value: `border-top-left-radius: 0;
					border-bottom-left-radius: 0`
                },
                {
                    name: `.rounded-t-sm`,
                    value: `border-top-left-radius: 5px;
					border-top-right-radius: 5px`
                },
                {
                    name: `.rounded-r-sm`,
                    value: `border-top-right-radius: 5px;
					border-bottom-right-radius: 5px`
                },
                {
                    name: `.rounded-b-sm`,
                    value: `border-bottom-right-radius: 5px;
					border-bottom-left-radius: 5px`
                },
                {
                    name: `.rounded-l-sm`,
                    value: `border-top-left-radius: 5px;
					border-bottom-left-radius: 5px`
                },
                {
                    name: `.rounded-t`,
                    value: `border-top-left-radius: 10px;
					border-top-right-radius: 10px`
                },
                {
                    name: `.rounded-r`,
                    value: `border-top-right-radius: 10px;
					border-bottom-right-radius: 10px`
                },
                {
                    name: `.rounded-b`,
                    value: `border-bottom-right-radius: 10px;
					border-bottom-left-radius: 10px`
                },
                {
                    name: `.rounded-l`,
                    value: `border-top-left-radius: 10px;
					border-bottom-left-radius: 10px`
                },
                {
                    name: `.rounded-t-lg`,
                    value: `border-top-left-radius: 15px;
					border-top-right-radius: 15px`
                },
                {
                    name: `.rounded-r-lg`,
                    value: `border-top-right-radius: 15px;
					border-bottom-right-radius: 15px`
                },
                {
                    name: `.rounded-b-lg`,
                    value: `border-bottom-right-radius: 15px;
					border-bottom-left-radius: 15px`
                },
                {
                    name: `.rounded-l-lg`,
                    value: `border-top-left-radius: 15px;
					border-bottom-left-radius: 15px`
                },
                {
                    name: `.rounded-t-full`,
                    value: `border-top-left-radius: 9999px;
					border-top-right-radius: 9999px`
                },
                {
                    name: `.rounded-r-full`,
                    value: `border-top-right-radius: 9999px;
					border-bottom-right-radius: 9999px`
                },
                {
                    name: `.rounded-b-full`,
                    value: `border-bottom-right-radius: 9999px;
					border-bottom-left-radius: 9999px`
                },
                {
                    name: `.rounded-l-full`,
                    value: `border-top-left-radius: 9999px;
					border-bottom-left-radius: 9999px`
                },
                {
                    name: `.rounded-tl-none`,
                    value: `border-top-left-radius: 0`
                },
                {
                    name: `.rounded-tr-none`,
                    value: `border-top-right-radius: 0`
                },
                {
                    name: `.rounded-br-none`,
                    value: `border-bottom-right-radius: 0`
                },
                {
                    name: `.rounded-bl-none`,
                    value: `border-bottom-left-radius: 0`
                },
                {
                    name: `.rounded-tl-sm`,
                    value: `border-top-left-radius: 5px`
                },
                {
                    name: `.rounded-tr-sm`,
                    value: `border-top-right-radius: 5px`
                },
                {
                    name: `.rounded-br-sm`,
                    value: `border-bottom-right-radius: 5px`
                },
                {
                    name: `.rounded-bl-sm`,
                    value: `border-bottom-left-radius: 5px`
                },
                {
                    name: `.rounded-tl`,
                    value: `border-top-left-radius: 10px`
                },
                {
                    name: `.rounded-tr`,
                    value: `border-top-right-radius: 10px`
                },
                {
                    name: `.rounded-br`,
                    value: `border-bottom-right-radius: 10px`
                },
                {
                    name: `.rounded-bl`,
                    value: `border-bottom-left-radius: 10px`
                },
                {
                    name: `.rounded-tl-lg`,
                    value: `border-top-left-radius: 15px`
                },
                {
                    name: `.rounded-tr-lg`,
                    value: `border-top-right-radius: 15px`
                },
                {
                    name: `.rounded-br-lg`,
                    value: `border-bottom-right-radius: 15px`
                },
                {
                    name: `.rounded-bl-lg`,
                    value: `border-bottom-left-radius: 15px`
                },
                {
                    name: `.rounded-tl-full`,
                    value: `border-top-left-radius: 9999px`
                },
                {
                    name: `.rounded-tr-full`,
                    value: `border-top-right-radius: 9999px`
                },
                {
                    name: `.rounded-br-full`,
                    value: `border-bottom-right-radius: 9999px`
                },
                {
                    name: `.rounded-bl-full`,
                    value: `border-bottom-left-radius: 9999px`
                }
            ]
        },
        borderStyle: {
            description: `Values for the border-style property`,
            classes: [
                {
                    name: `.border-solid`,
                    value: `border-style: solid`
                },
                {
                    name: `.border-dashed`,
                    value: `border-style: dashed`
                },
                {
                    name: `.border-dotted`,
                    value: `border-style: dotted`
                },
                {
                    name: `.border-none`,
                    value: `border-style: none`
                }
            ]
        },
        borderWidth: {
            description: `Values for the border-width property`,
            classes: [
                {
                    name: `.border-0`,
                    value: `border-width: 0`
                },
                {
                    name: `.border-2`,
                    value: `border-width: 2px`
                },
                {
                    name: `.border-4`,
                    value: `border-width: 4px`
                },
                {
                    name: `.border-8`,
                    value: `border-width: 8px`
                },
                {
                    name: `.border`,
                    value: `border-width: 1px`
                },
                {
                    name: `.border-t-0`,
                    value: `border-top-width: 0`
                },
                {
                    name: `.border-r-0`,
                    value: `border-right-width: 0`
                },
                {
                    name: `.border-b-0`,
                    value: `border-bottom-width: 0`
                },
                {
                    name: `.border-l-0`,
                    value: `border-left-width: 0`
                },
                {
                    name: `.border-t-2`,
                    value: `border-top-width: 2px`
                },
                {
                    name: `.border-r-2`,
                    value: `border-right-width: 2px`
                },
                {
                    name: `.border-b-2`,
                    value: `border-bottom-width: 2px`
                },
                {
                    name: `.border-l-2`,
                    value: `border-left-width: 2px`
                },
                {
                    name: `.border-t-4`,
                    value: `border-top-width: 4px`
                },
                {
                    name: `.border-r-4`,
                    value: `border-right-width: 4px`
                },
                {
                    name: `.border-b-4`,
                    value: `border-bottom-width: 4px`
                },
                {
                    name: `.border-l-4`,
                    value: `border-left-width: 4px`
                },
                {
                    name: `.border-t-8`,
                    value: `border-top-width: 8px`
                },
                {
                    name: `.border-r-8`,
                    value: `border-right-width: 8px`
                },
                {
                    name: `.border-b-8`,
                    value: `border-bottom-width: 8px`
                },
                {
                    name: `.border-l-8`,
                    value: `border-left-width: 8px`
                },
                {
                    name: `.border-t`,
                    value: `border-top-width: 1px`
                },
                {
                    name: `.border-r`,
                    value: `border-right-width: 1px`
                },
                {
                    name: `.border-b`,
                    value: `border-bottom-width: 1px`
                },
                {
                    name: `.border-l`,
                    value: `border-left-width: 1px`
                }
            ]
        },
        boxShadow: {
            description: `Values for the box-shadow property`,
            classes: [
                {
                    name: `.shadow-1dp`,
                    value: `box-shadow: 0 1px 1px 0 rgba(47, 105, 252, .08), 0 2px 1px -1px rgba(47, 105, 252, .08), 0 1px 3px 0 rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-2dp`,
                    value: `box-shadow: 0 2px 2px 0 rgba(47, 105, 252, .08), 0 3px 1px -2px rgba(47, 105, 252, .08), 0 1px 5px 0 rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-3dp`,
                    value: `box-shadow: 0 3px 4px 0 rgba(47, 105, 252, .08), 0 3px 3px -2px rgba(47, 105, 252, .08), 0 1px 8px 0 rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-4dp`,
                    value: `box-shadow: 0 4px 5px 0 rgba(47, 105, 252, .08), 0 1px 10px 0 rgba(47, 105, 252, .08), 0 2px 4px -1px rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-6dp`,
                    value: `box-shadow: 0 6px 10px 0 rgba(47, 105, 252, .08), 0 1px 18px 0 rgba(47, 105, 252, .08), 0 3px 5px -1px rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-8dp`,
                    value: `box-shadow: 0 8px 10px 1px rgba(47, 105, 252, .08), 0 3px 14px 2px rgba(47, 105, 252, .08), 0 5px 5px -3px rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-9dp`,
                    value: `box-shadow: 0 9px 12px 1px rgba(47, 105, 252, .08), 0 3px 16px 2px rgba(47, 105, 252, .08), 0 5px 6px -3px rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-12dp`,
                    value: `box-shadow: 0 12px 17px 2px rgba(47, 105, 252, .08), 0 5px 22px 4px rgba(47, 105, 252, .08), 0 7px 8px -4px rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-16dp`,
                    value: `box-shadow: 0 16px 24px 2px rgba(47, 105, 252, .08), 0 6px 30px 5px rgba(47, 105, 252, .08), 0 8px 10px -5px rgba(47, 105, 252, .12)`
                },
                {
                    name: `.shadow-24dp`,
                    value: `box-shadow: 0 24px 38px 3px rgba(47, 105, 252, .08), 0 9px 46px 8px rgba(47, 105, 252, .08), 0 11px 15px -7px rgba(47, 105, 252, .12)`
                }
            ]
        },
        cursor: {
            description: `Values for the cursor property`,
            classes: [
                {
                    name: `.cursor-auto`,
                    value: `cursor: auto`
                },
                {
                    name: `.cursor-default`,
                    value: `cursor: default`
                },
                {
                    name: `.cursor-pointer`,
                    value: `cursor: pointer`
                },
                {
                    name: `.cursor-wait`,
                    value: `cursor: wait`
                },
                {
                    name: `.cursor-text`,
                    value: `cursor: text`
                },
                {
                    name: `.cursor-move`,
                    value: `cursor: move`
                },
                {
                    name: `.cursor-not-allowed`,
                    value: `cursor: not-allowed`
                }
            ]
        },
        fill: {
            description: `Values for the fill property`,
            classes: [
                {
                    name: `.fill-current`,
                    value: `fill: currentColor`
                }
            ]
        },
        display: {
            description: `Values for the display property`,
            classes: [
                {
                    name: `.block`,
                    value: `display: block`
                },
                {
                    name: `.inline-block`,
                    value: `display: inline-block`
                },
                {
                    name: `.inline`,
                    value: `display: inline`
                },
                {
                    name: `.flex`,
                    value: `display: flex`
                },
                {
                    name: `.inline-flex`,
                    value: `display: inline-flex`
                },
                {
                    name: `.table`,
                    value: `display: table`
                },
                {
                    name: `.table-row`,
                    value: `display: table-row`
                },
                {
                    name: `.table-cell`,
                    value: `display: table-cell`
                },
                {
                    name: `.hidden`,
                    value: `display: none`
                }
            ]
        },
        flex: {
            description: `Values for the flex property`,
            classes: [
                {
                    name: `.flex-row`,
                    value: `flex-direction: row`
                },
                {
                    name: `.flex-row-reverse`,
                    value: `flex-direction: row-reverse`
                },
                {
                    name: `.flex-col`,
                    value: `flex-direction: column`
                },
                {
                    name: `.flex-col-reverse`,
                    value: `flex-direction: column-reverse`
                },
                {
                    name: `.flex-wrap`,
                    value: `flex-wrap: wrap`
                },
                {
                    name: `.flex-wrap-reverse`,
                    value: `flex-wrap: wrap-reverse`
                },
                {
                    name: `.flex-no-wrap`,
                    value: `flex-wrap: nowrap`
                },
                {
                    name: `.items-start`,
                    value: `align-items: flex-start`
                },
                {
                    name: `.items-end`,
                    value: `align-items: flex-end`
                },
                {
                    name: `.items-center`,
                    value: `align-items: center`
                },
                {
                    name: `.items-baseline`,
                    value: `align-items: baseline`
                },
                {
                    name: `.items-stretch`,
                    value: `align-items: stretch`
                },
                {
                    name: `.self-auto`,
                    value: `align-self: auto`
                },
                {
                    name: `.self-start`,
                    value: `align-self: flex-start`
                },
                {
                    name: `.self-end`,
                    value: `align-self: flex-end`
                },
                {
                    name: `.self-center`,
                    value: `align-self: center`
                },
                {
                    name: `.self-stretch`,
                    value: `align-self: stretch`
                },
                {
                    name: `.justify-start`,
                    value: `justify-content: flex-start`
                },
                {
                    name: `.justify-end`,
                    value: `justify-content: flex-end`
                },
                {
                    name: `.justify-center`,
                    value: `justify-content: center`
                },
                {
                    name: `.justify-between`,
                    value: `justify-content: space-between`
                },
                {
                    name: `.justify-around`,
                    value: `justify-content: space-around`
                },
                {
                    name: `.content-center`,
                    value: `align-content: center`
                },
                {
                    name: `.content-start`,
                    value: `align-content: flex-start`
                },
                {
                    name: `.content-end`,
                    value: `align-content: flex-end`
                },
                {
                    name: `.content-between`,
                    value: `align-content: space-between`
                },
                {
                    name: `.content-around`,
                    value: `align-content: space-around`
                },
                {
                    name: `.flex-1`,
                    value: `flex: 1 1 0%`
                },
                {
                    name: `.flex-auto`,
                    value: `flex: 1 1 auto`
                },
                {
                    name: `.flex-initial`,
                    value: `flex: 0 1 auto`
                },
                {
                    name: `.flex-none`,
                    value: `flex: none`
                },
                {
                    name: `.flex-grow-0`,
                    value: `flex-grow: 0`
                },
                {
                    name: `.flex-grow`,
                    value: `flex-grow: 1`
                },
                {
                    name: `.flex-shrink-0`,
                    value: `flex-shrink: 0`
                },
                {
                    name: `.flex-shrink`,
                    value: `flex-shrink: 1`
                },
                {
                    name: `.order-1`,
                    value: `order: 1`
                },
                {
                    name: `.order-2`,
                    value: `order: 2`
                },
                {
                    name: `.order-3`,
                    value: `order: 3`
                },
                {
                    name: `.order-4`,
                    value: `order: 4`
                },
                {
                    name: `.order-5`,
                    value: `order: 5`
                },
                {
                    name: `.order-6`,
                    value: `order: 6`
                },
                {
                    name: `.order-7`,
                    value: `order: 7`
                },
                {
                    name: `.order-8`,
                    value: `order: 8`
                },
                {
                    name: `.order-9`,
                    value: `order: 9`
                },
                {
                    name: `.order-10`,
                    value: `order: 10`
                },
                {
                    name: `.order-11`,
                    value: `order: 11`
                },
                {
                    name: `.order-12`,
                    value: `order: 12`
                },
                {
                    name: `.order-first`,
                    value: `order: -9999`
                },
                {
                    name: `.order-last`,
                    value: `order: 9999`
                },
                {
                    name: `.order-none`,
                    value: `order: 0`
                }
            ]
        },
        float: {
            description: `Values for the float property`,
            classes: [
                {
                    name: `.float-right`,
                    value: `float: right`
                },
                {
                    name: `.float-left`,
                    value: `float: left`
                },
                {
                    name: `.float-none`,
                    value: `float: none`
                },
                {
                    name: `.clearfix:after`,
                    value: `content: "";
					display: table;
					clear: both`
                }
            ]
        },
        fontWeight: {
            description: `Values for the font-weight property`,
            classes: [
                {
                    name: `.font-regular`,
                    value: `font-weight: 400`
                },
                {
                    name: `.font-semi-bold`,
                    value: `font-weight: 600`
                },
                {
                    name: `.font-black`,
                    value: `font-weight: 900`
                }
            ]
        },
        height: {
            description: `Values for the height property`,
            classes: [
                {
                    name: `.h-auto`,
                    value: `height: auto`
                },
                {
                    name: `.h-xxxxs`,
                    value: `height: calc(0.125 * var(--space-unit))`
                },
                {
                    name: `.h-xxxs`,
                    value: `height: calc(0.25 * var(--space-unit))`
                },
                {
                    name: `.h-xxs`,
                    value: `height: calc(0.375 * var(--space-unit))`
                },
                {
                    name: `.h-xs`,
                    value: `height: calc(0.5 * var(--space-unit))`
                },
                {
                    name: `.h-sm`,
                    value: `height: calc(0.75 * var(--space-unit))`
                },
                {
                    name: `.h-base`,
                    value: `height: var(--space-unit)`
                },
                {
                    name: `.h-md`,
                    value: `height: calc(1.25 * var(--space-unit))`
                },
                {
                    name: `.h-lg`,
                    value: `height: calc(2 * var(--space-unit))`
                },
                {
                    name: `.h-xl`,
                    value: `height: calc(3.25 * var(--space-unit))`
                },
                {
                    name: `.h-xxl`,
                    value: `height: calc(5.25 * var(--space-unit))`
                },
                {
                    name: `.h-xxxl`,
                    value: `height: calc(8.5 * var(--space-unit))`
                },
                {
                    name: `.h-xxxxl`,
                    value: `height: calc(13.75 * var(--space-unit))`
                },
                {
                    name: `.h-component`,
                    value: `height: calc(1.25 * var(--space-unit))`
                },
                {
                    name: `.h-full`,
                    value: `height: 100%`
                },
                {
                    name: `.h-screen`,
                    value: `height: 100vh`
                }
            ]
        },
        inset: {
            description: `Values for the inset property`,
            classes: [
                {
                    name: `.inset-0`,
                    value: `top: 0;
					right: 0;
					bottom: 0;
					left: 0`
                },
                {
                    name: `.inset-auto`,
                    value: `top: auto;
					right: auto;
					bottom: auto;
					left: auto`
                },
                {
                    name: `.inset-y-0`,
                    value: `top: 0;
					bottom: 0`
                },
                {
                    name: `.inset-x-0`,
                    value: `right: 0;
					left: 0`
                },
                {
                    name: `.inset-y-auto`,
                    value: `top: auto;
					bottom: auto`
                },
                {
                    name: `.inset-x-auto`,
                    value: `right: auto;
					left: auto`
                },
                {}
            ]
        },
        lists: {
            description: `Values for the list element`,
            classes: [
                {
                    name: `.list-inside`,
                    value: `list-style-position: inside`
                },
                {
                    name: `.list-outside`,
                    value: `list-style-position: outside`
                },
                {
                    name: `.list-none`,
                    value: `list-style-type: none`
                },
                {
                    name: `.list-disc`,
                    value: `list-style-type: disc`
                },
                {
                    name: `.list-decimal`,
                    value: `list-style-type: decimal`
                }
            ]
        },
        maxHeight: {
            description: `Values for the max-height property`,
            classes: [
                {
                    name: `.max-h-full`,
                    value: `max-height: 100%`
                },
                {
                    name: `.max-h-screen`,
                    value: `max-height: 100vh`
                }
            ]
        },
        maxWidth: {
            description: `Values for the max-width property`,
            classes: [
                {
                    name: `.max-w-xs`,
                    value: `max-width: 20rem`
                },
                {
                    name: `.max-w-sm`,
                    value: `max-width: 24rem`
                },
                {
                    name: `.max-w-md`,
                    value: `max-width: 28rem`
                },
                {
                    name: `.max-w-lg`,
                    value: `max-width: 32rem`
                },
                {
                    name: `.max-w-xl`,
                    value: `max-width: 36rem`
                },
                {
                    name: `.max-w-2xl`,
                    value: `max-width: 42rem`
                },
                {
                    name: `.max-w-3xl`,
                    value: `max-width: 48rem`
                },
                {
                    name: `.max-w-4xl`,
                    value: `max-width: 56rem`
                },
                {
                    name: `.max-w-5xl`,
                    value: `max-width: 64rem`
                },
                {
                    name: `.max-w-6xl`,
                    value: `max-width: 72rem`
                },
                {
                    name: `.max-w-full`,
                    value: `max-width: 100%`
                }
            ]
        },
        minHeight: {
            description: `Values for the min-height property`,
            classes: [
                {
                    name: `.min-h-0`,
                    value: `min-height: 0`
                },
                {
                    name: `.min-h-full`,
                    value: `min-height: 100%`
                },
                {
                    name: `.min-h-screen`,
                    value: `min-height: 100vh`
                }
            ]
        },
        minWidth: {
            description: `Values for the min-width property`,
            classes: [
                {
                    name: `.min-w-0`,
                    value: `min-width: 0`
                },
                {
                    name: `.min-w-full`,
                    value: `min-width: 100%`
                }
            ]
        },
        object: {
            description: `Values for the object property`,
            classes: [
                {
                    name: `.object-contain`,
                    value: `object-fit: contain`
                },
                {
                    name: `.object-cover`,
                    value: `object-fit: cover`
                },
                {
                    name: `.object-fill`,
                    value: `object-fit: fill`
                },
                {
                    name: `.object-none`,
                    value: `object-fit: none`
                },
                {
                    name: `.object-scale-down`,
                    value: `object-fit: scale-down`
                },
                {
                    name: `.object-bottom`,
                    value: `object-position: bottom`
                },
                {
                    name: `.object-center`,
                    value: `object-position: center`
                },
                {
                    name: `.object-left`,
                    value: `object-position: left`
                },
                {
                    name: `.object-left-bottom`,
                    value: `object-position: left bottom`
                },
                {
                    name: `.object-left-top`,
                    value: `object-position: left top`
                },
                {
                    name: `.object-right`,
                    value: `object-position: right`
                },
                {
                    name: `.object-right-bottom`,
                    value: `object-position: right bottom`
                },
                {
                    name: `.object-right-top`,
                    value: `object-position: right top`
                },
                {
                    name: `.object-top`,
                    value: `object-position: top`
                }
            ]
        },
        opacity: {
            description: `Values for the opacity property`,
            classes: [
                {
                    name: `.opacity-0`,
                    value: `opacity: 0`
                },
                {
                    name: `.opacity-20`,
                    value: `opacity: 0.2`
                },
                {
                    name: `.opacity-40`,
                    value: `opacity: 0.4`
                },
                {
                    name: `.opacity-60`,
                    value: `opacity: 0.6`
                },
                {
                    name: `.opacity-80`,
                    value: `opacity: 0.8`
                },
                {
                    name: `.opacity-100`,
                    value: `opacity: 1`
                }
            ]
        },
        overflow: {
            description: `Values for the overflow property`,
            classes: [
                {
                    name: `.overflow-auto`,
                    value: `overflow: auto`
                },
                {
                    name: `.overflow-hidden`,
                    value: `overflow: hidden`
                },
                {
                    name: `.overflow-visible`,
                    value: `overflow: visible`
                },
                {
                    name: `.overflow-scroll`,
                    value: `overflow: scroll`
                },
                {
                    name: `.overflow-x-auto`,
                    value: `overflow-x: auto`
                },
                {
                    name: `.overflow-y-auto`,
                    value: `overflow-y: auto`
                },
                {
                    name: `.overflow-x-hidden`,
                    value: `overflow-x: hidden`
                },
                {
                    name: `.overflow-y-hidden`,
                    value: `overflow-y: hidden`
                },
                {
                    name: `.overflow-x-visible`,
                    value: `overflow-x: visible`
                },
                {
                    name: `.overflow-y-visible`,
                    value: `overflow-y: visible`
                },
                {
                    name: `.overflow-x-scroll`,
                    value: `overflow-x: scroll`
                },
                {
                    name: `.overflow-y-scroll`,
                    value: `overflow-y: scroll`
                }
            ]
        },
        position: {
            description: `Values for positioning elements`,
            classes: [
                {
                    name: `.static`,
                    value: `position: static`
                },
                {
                    name: `.fixed`,
                    value: `position: fixed`
                },
                {
                    name: `.absolute`,
                    value: `position: absolute`
                },
                {
                    name: `.relative`,
                    value: `position: relative`
                },
                {
                    name: `.sticky`,
                    value: `position: sticky`
                },
                {
                    name: `.top-0`,
                    value: `top: 0`
                },
                {
                    name: `.right-0`,
                    value: `right: 0`
                },
                {
                    name: `.bottom-0`,
                    value: `bottom: 0`
                },
                {
                    name: `.left-0`,
                    value: `left: 0`
                },
                {
                    name: `.top-auto`,
                    value: `top: auto`
                },
                {
                    name: `.right-auto`,
                    value: `right: auto`
                },
                {
                    name: `.bottom-auto`,
                    value: `bottom: auto`
                },
                {
                    name: `.left-auto`,
                    value: `left: auto`
                }
            ]
        },
        textAlignment: {
            description: `Values for the text-align property`,
            classes: [
                {
                    name: `.text-left`,
                    values: `text-align: left`
                },
                {
                    name: `.text-center`,
                    values: `text-align: center`
                },
                {
                    name: `.text-right`,
                    values: `text-align: right`
                },
                {
                    name: `.text-justify`,
                    values: `text-align: justify`
                }
            ]
        },
        textStyles: {
            description: `Values for styling text elements`,
            classes: [
                {
                    name: `.italic`,
                    value: `font-style: italic`
                },
                {
                    name: `.not-italic`,
                    value: `font-style: normal`
                },
                {
                    name: `.uppercase`,
                    value: `text-transform: uppercase`
                },
                {
                    name: `.lowercase`,
                    value: `text-transform: lowercase`
                },
                {
                    name: `.capitalize`,
                    value: `text-transform: capitalize`
                },
                {
                    name: `.normal-case`,
                    value: `text-transform: none`
                },
                {
                    name: `.underline`,
                    value: `text-decoration: underline`
                },
                {
                    name: `.line-through`,
                    value: `text-decoration: line-through`
                },
                {
                    name: `.no-underline`,
                    value: `text-decoration: none`
                },
                {
                    name: `.antialiased`,
                    value: `-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale`
                },
                {
                    name: `.subpixel-antialiased`,
                    value: `-webkit-font-smoothing: auto;
					-moz-osx-font-smoothing: auto`
                },
                {
                    name: `.whitespace-normal`,
                    value: `white-space: normal`
                },
                {
                    name: `.whitespace-no-wrap`,
                    value: `white-space: nowrap`
                },
                {
                    name: `.whitespace-pre`,
                    value: `white-space: pre`
                },
                {
                    name: `.whitespace-pre-line`,
                    value: `white-space: pre-line`
                },
                {
                    name: `.whitespace-pre-wrap`,
                    value: `white-space: pre-wrap`
                },
                {
                    name: `.break-normal`,
                    value: `overflow-wrap: normal;
						word-break: normal`
                },
                {
                    name: `.break-words`,
                    value: `overflow-wrap: break-word`
                },
                {
                    name: `.break-all`,
                    value: `word-break: break-all`
                },
                {
                    name: `.truncate`,
                    value: `overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap`
                },
                {
                    name: `.align-text-top`,
                    value: `vertical-align: text-top`
                },
                {
                    name: `.align-text-bottom`,
                    value: `vertical-align: text-bottom`
                }
            ]
        },
        width: {
            description: `Values for the width property`,
            classes: [
                {
                    name: `.w-1-2`,
                    value: `width: 50%`
                },
                {
                    name: `.w-1-3`,
                    value: `width: 33.33333%`
                },
                {
                    name: `.w-2-3`,
                    value: `width: 66.66667%`
                },
                {
                    name: `.w-1-4`,
                    value: `width: 25%`
                },
                {
                    name: `.w-3-4`,
                    value: `width: 75%`
                },
                {
                    name: `.w-1-5`,
                    value: `width: 20%`
                },
                {
                    name: `.w-2-5`,
                    value: `width: 40%`
                },
                {
                    name: `.w-3-5`,
                    value: `width: 60%`
                },
                {
                    name: `.w-4-5`,
                    value: `width: 80%`
                },
                {
                    name: `.w-1-6`,
                    value: `width: 16.66667%`
                },
                {
                    name: `.w-5-6`,
                    value: `width: 83.33333%`
                },
                {
                    name: `.w-full`,
                    value: `width: 100%`
                },
                {
                    name: `.w-screen`,
                    value: `width: 100vw`
                }
            ]
        },
        zIndex: {
            description: `Values for the z-index property`,
            classes: [
                {
                    name: `.z-0`,
                    value: `z-index: 0`
                },
                {
                    name: `.z-10`,
                    value: `z-index: 10`
                },
                {
                    name: `.z-20`,
                    value: `z-index: 20`
                },
                {
                    name: `.z-30`,
                    value: `z-index: 30`
                },
                {
                    name: `.z-40`,
                    value: `z-index: 40`
                },
                {
                    name: `.z-50`,
                    value: `z-index: 50`
                },
                {
                    name: `.z-auto`,
                    value: `z-index: auto`
                }
            ]
        },
        misc: {
            description: `Miscellaneous utility classes available`,
            classes: [
                {
                    name: `.wrapper`,
                    value: `*Adds responsive padding for contained elements`
                },
                {
                    name: `.appearance-none`,
                    value: `appearance: none`
                },
                {
                    name: `.bg-fixed`,
                    value: `background-attachment: fixed`
                },
                {
                    name: `.bg-local`,
                    value: `background-attachment: local`
                },
                {
                    name: `.bg-scroll`,
                    value: `background-attachment: scroll`
                },
                {
                    name: `.border-collapse`,
                    value: `border-collapse: collapse`
                },
                {
                    name: `.border-separate`,
                    value: `border-collapse: separate`
                },
                {
                    name: `.outline-none`,
                    value: `outline: 0`
                },
                {
                    name: `.scrolling-touch`,
                    value: `-webkit-overflow-scrolling: touch`
                },
                {
                    name: `.scrolling-auto`,
                    value: `-webkit-overflow-scrolling: auto`
                },
                {
                    name: `.pointer-events-none`,
                    value: `pointer-events: none`
                },
                {
                    name: `.pointer-events-auto`,
                    value: `pointer-events: auto`
                },
                {
                    name: `.resize-none`,
                    value: `resize: none`
                },
                {
                    name: `.resize-y`,
                    value: `resize: vertical`
                },
                {
                    name: `.resize-x`,
                    value: `resize: horizontal`
                },
                {
                    name: `.resize`,
                    value: `resize: both`
                },
                {
                    name: `.stroke-current`,
                    value: `stroke: currentColor`
                },
                {
                    name: `.table-auto`,
                    value: `table-layout: auto`
                },
                {
                    name: `.table-fixed`,
                    value: `table-layout: fixed`
                },
                {
                    name: `.select-none`,
                    value: `user-select: none`
                },
                {
                    name: `.select-text`,
                    value: `user-select: text`
                },
                {
                    name: `.select-all`,
                    value: `user-select: all`
                },
                {
                    name: `.select-auto`,
                    value: `user-select: auto`
                },
                {
                    name: `.align-baseline`,
                    value: `vertical-align: baseline`
                },
                {
                    name: `.align-top`,
                    value: `vertical-align: top`
                },
                {
                    name: `.align-middle`,
                    value: `vertical-align: middle`
                },
                {
                    name: `.align-bottom`,
                    value: `vertical-align: bottom`
                },
                {
                    name: `.visible`,
                    value: `visibility: visible`
                },
                {
                    name: `.invisible`,
                    value: `visibility: hidden`
                }
            ]
        }
    }
];
