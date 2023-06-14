const deviceSizes = {
	mobile: "580px",
	tablet: "768px",
	pc: "1024px",
};

const DEVICE = {
	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	tablet: `screen and (max-width: ${deviceSizes.tablet})`,
	pc: `screen and (max-width: ${deviceSizes.pc})`,
};

const PALETTE = {
	fontColor: {
		white: "#ffffff",
		dark: "24292f",
	},
	background: "#24292f",
};

const theme = {
	PALETTE,
	DEVICE,
};

export default theme;
