import { createGlobalStyle } from  'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--nav-height: 50px;
		--page-height: calc(100% - --nav-height);

		--max-px-width: 1200px;
		--max-page-width: 90%;

		--mid-page-width: 95%;

		--sml-page-width: 98%;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html, body {
		width: 100%;
		height: 100%;
	}
	body {
		overflow: ${({stopScroll}) => stopScroll && 'hidden'};
	}
	#root {
		height: 100%;
		width: 100%;
	}
`;

const GlobalPageSetup = styled.div`

	width: 80%;
	height: var(--page-height);
	margin: 0 auto;

	@media (max-width: var(--max-px-width)) { width: var(--max-page-width); }
	@media (max-width: 1000px) { width: var(--mid-page-width); }
	@media (max-width: 800px)  { width: var(--sml-page-width); }

`

export {GlobalStyle, GlobalPageSetup};