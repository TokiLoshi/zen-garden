// import { Crate } from "./sandbox/Crate";
// import { Rake } from "./sandbox/Rake";
// import { RockMed } from "./sandbox/RockMed";
// import { RockMedOne } from "./sandbox/RockMedOne";
// import { RockMedTwo } from "./sandbox/RockMedTwo";
// import { Bee } from "./creatures/Bee";
// import { Panda } from "./creatures/Panda";
// import { Clover } from "./plants/Clover";
// import { Fern } from "./plants/Fern";
// import { Flowers } from "./plants/Flowers";
// import { Mushrooms } from "./plants/Mushrooms";
// import { Pine } from "./plants/Pine";
// import { useControls } from "leva";
import { Grid } from "@react-three/drei";
import Sandbox from "../Sandbox/Sandbox";
// import Plants from "../Plants/Plants";
import Creatures from "../Creatures/Creatures";

export default function Experience() {
	return (
		<>
			<Grid
				sectionSize={3}
				sectionColor={"white"}
				sectionThickness={1}
				cellSize={1}
				cellColor={"#6f6f6f"}
				cellThickness={0.6}
				infiniteGrid
				fadeDistance={50}
				fadeStrength={5}
			/>
			<Sandbox />
			{/* <Plants /> */}
			{/* <Creatures /> */}
		</>
	);
}
