import { useControls } from "leva";
import { Crate } from "../components/sandbox/Crate";
import { Rake } from "../components/sandbox/Rake";
import { RockMed } from "../components/sandbox/RockMed";
import { RockMedOne } from "../components/sandbox/RockMedOne";
import { RockMedTwo } from "../components/sandbox/RockMedTwo";

export default function Sandbox() {
	const {
		cratePositionX,
		cratePositionY,
		cratePositionZ,
		crateRotationX,
		crateRotationY,
		crateRotationZ,
	} = useControls(
		"crate",
		{
			cratePositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			cratePositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			cratePositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			crateRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			crotatRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			crateRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{
			collapsed: true,
		}
	);
	const {
		rakePositionX,
		rakePositionY,
		rakePositionZ,
		rakeRotationX,
		rakeRotationY,
		rakeRotationZ,
	} = useControls(
		"rake",

		{
			rakePositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			rakePositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			rakePositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			rakeRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			rakeRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			rakeRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{
			collapsed: true,
		}
	);
	const {
		rockMedPositionX,
		rockMedPositionY,
		rockMedPositionZ,
		rockMedRotationX,
		rockMedRotationY,
		rockMedRotationZ,
	} = useControls(
		"rockMed",
		{
			rockMedPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const {
		rockMedOnePositionX,
		rockMedOnePositionY,
		rockMedOnePositionZ,
		rockMedOneRotationX,
		rockMedOneRotationY,
		rockMedOneRotationZ,
	} = useControls(
		"rockMedOne",
		{
			rockMedOnePositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedOnePositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedOnePositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedOneRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedOneRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedOneRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const {
		rockMedTwoPositionX,
		rockMedTwoPositionY,
		rockMedTwoPositionZ,
		rockMedTwoRotationX,
		rockMedTwoRotationY,
		rockMedTwoRotationZ,
	} = useControls(
		"rockMedTwo",
		{
			rockMedTwoPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedTwoPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedTwoPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedTwoRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedTwoRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedTwoRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	return (
		<>
			<Crate
				position-x={cratePositionX}
				position-y={cratePositionY}
				position-z={cratePositionZ}
				rotation-x={crateRotationX}
				rotation-y={crateRotationY}
				rotation-z={crateRotationZ}
			/>
			<Rake
				position-x={rakePositionX}
				position-y={rakePositionY}
				position-z={rakePositionZ}
				rotation-x={rakeRotationX}
				rotation-y={rakeRotationY}
				rotation-z={rakeRotationZ}
			/>
			<RockMed
				position-x={rockMedPositionX}
				position-y={rockMedPositionY}
				position-z={rockMedPositionZ}
				rotation-x={rockMedRotationX}
				rotation-y={rockMedRotationY}
				rotation-z={rockMedRotationZ}
			/>
			<RockMedOne
				position-x={rockMedOnePositionX}
				position-y={rockMedOnePositionY}
				position-z={rockMedOnePositionZ}
				rotation-x={rockMedOneRotationX}
				rotation-y={rockMedOneRotationY}
				rotation-z={rockMedOneRotationZ}
			/>
			<RockMedTwo
				position-x={rockMedTwoPositionX}
				position-y={rockMedTwoPositionY}
				position-z={rockMedTwoPositionZ}
				rotation-x={rockMedTwoRotationX}
				rotation-y={rockMedTwoRotationY}
				rotation-z={rockMedTwoRotationZ}
			/>
		</>
	);
}
