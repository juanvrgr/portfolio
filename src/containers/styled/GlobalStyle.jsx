import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		transition: background-color 500ms ease, filter 500ms ease;
	}

	body {
		background-color: ${(props) => (props.dark ? "#292929" : "#FCFCFC")};
		overflow-X: hidden;
		height: 100%;
		width: 100%;
	}

	.App {
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.general {
		display: flex;
		flex-direction: column;
	}

		.Nav {
		background-color: ${(props) =>
      !props.dark ? "#292929" : "rgb(122 170 215 / 80%);"};

		* {
			color: ${(props) => (props.dark ? "#151515" : "#FFFF")};
		}

		.languages ul li {
			color: #FFFF;
		}
	}

    	.NavIcon {
		filter: invert(${(props) => (!props.dark ? "100%" : "0")})
	}

	.Lateral {
		background-color: ${(props) =>
      props.dark ? "rgba(0, 0, 0, 0.5);" : "rgb(122 170 215 / 80%);"};
		
		h1 {
			color: ${(props) => (!props.dark ? "black" : "white")};
		}

		h3 {
			color: ${(props) => (!props.dark ? "black" : "rgb(122 170 215 / 80%)")};
		}

		.active {
			color: ${(props) => (!props.dark ? "rgba(0,0,0,.9)" : "rgb(122 170 215 / 80%)")};
		}

		&:hover {
			color: ${(props) => (!props.dark ? "black" : "white")};
		}
	}
	
	  .name:hover {
		  color: ${(props) => (!props.dark ? "rgb(122 170 215 / 80%);" : "rgb(122 170 215 / 80%)")};
	  }

	.icon {
		filter: invert(${(props) => (props.dark ? "100%" : "0")})
	}

	.presentation, .openTag, .closedTag, .closedMainTag {
		color: ${(props) => (!props.dark ? "black" : "#FFFF")};
		cursor: default;
	}
	.openTag, .closedTag, .closedMainTag {
		transition: all 500ms ease;
		&:hover {
			opacity: 100%;
		}
	}

	.button, .sendMail {
		background-color: ${(props) =>
      !props.dark ? "rgb(122 170 215 / 80%)" : "rgb(122 170 215 / 80%);"};
		color: ${(props) => (props.dark ? "#151515" : "#FFFF")};
	}
	
	#Skills {
		span {
			color: ${(props) => (props.dark ? "#FFF" : "#000")};
		}
	}

	#Projects {
		.charSpan {
			color: ${(props) =>
        props.dark ? "rgba(255, 255, 255, .6)" : "rgba(0, 0, 0, .7)"};

			&:hover {
				color: ${(props) => (!props.dark ? "rgb(122 170 215 / 80%);" : "rgb(122 170 215 / 80%)")};
			}
		}

		.projectData {
			color: ${(props) =>
        props.dark ? "rgba(255, 255, 255, .6)" : "rgba(0, 0, 0, .7)"};

			&:hover {
				color: ${(props) =>
          props.dark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};
			}
		}

		.icon img:hover {
			transition: transform 500ms ease;
			transform: translateX(5px);
		}
	}

	#Contact {
		input, textarea {
			&:focus {
				border: 2px solid ${(props) =>
          !props.dark ? "#292929" : "rgb(122 170 215 / 80%);"};
			  outline: none;
			}
		}
	}

  @media screen and (max-width: 500px) {
	  body {
	    background-color: ${(props) =>
        props.dark ? "rgba(0, 0, 0, 0.85);" : "rgb(122 170 215 / 80%);"};
	  }
  }
`;
