import { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/index";

export function App(): JSX.Element{
	return (
		<>
			<GlobalStyles />
			<Header />
		</>

	);
}
