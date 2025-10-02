import { Panda } from "../components/creatures/Panda";
import { Bee } from "../components/creatures/Bee";
import { useControls } from "leva";

export default function Creatures() {
	const {
		pandaPositionX,
		pandaPositionY,
		pandaPositionZ,
		pandaRotationX,
		pandaRotationY,
		pandaRotationZ,
		pandaScale,
	} = useControls(
		"panda",
		{
			pandaPositionX: { value: 4, min: -10, max: 10, step: 0.01 },
			pandaPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			pandaPositionZ: { value: -2, min: -10, max: 10, step: 0.01 },
			pandaRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			pandaRotationY: { value: -0.3, min: -10, max: 10, step: 0.01 },
			pandaRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			pandaScale: { value: 1.0, min: 0.1, max: 10, step: 0.1 },
		},
		{ collapsed: true }
	);
	const {
		beePositionX,
		beePositionY,
		beePositionZ,
		beeRotationX,
		beeRotationY,
		beeRotationZ,
		beeScale,
	} = useControls(
		"bee",
		{
			beePositionX: { value: -1.5, min: -10, max: 10, step: 0.01 },
			beePositionY: { value: 2.0, min: -10, max: 10, step: 0.01 },
			beePositionZ: { value: 4.0, min: -10, max: 10, step: 0.01 },
			beeRotationX: { value: 0.0, min: -10, max: 10, step: 0.01 },
			beeRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			beeRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
			beeScale: { value: 1, min: 0.01, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	return (
		<>
			<Panda
				position-x={pandaPositionX}
				position-y={pandaPositionY}
				position-z={pandaPositionZ}
				rotation-x={pandaRotationX}
				rotation-y={pandaRotationY}
				rotation-z={pandaRotationZ}
				scale={pandaScale}
			/>
			<Bee
				position-x={beePositionX}
				position-y={beePositionY}
				position-z={beePositionZ}
				rotation-x={beeRotationX}
				rotation-y={beeRotationY}
				rotation-z={beeRotationZ}
				scale={beeScale}
			/>
		</>
	);
}
