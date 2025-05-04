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
	} = useControls("panda", {
		pandaPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
		pandaPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
		pandaPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
		pandaRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
		pandaRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
		pandaRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
	});
	const {
		beePositionX,
		beePositionY,
		beePositionZ,
		beeRotationX,
		beeRotationY,
		beeRotationZ,
	} = useControls("bee", {
		beePositionX: { value: 0, min: -10, max: 10, step: 0.01 },
		beePositionY: { value: 0, min: -10, max: 10, step: 0.01 },
		beePositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
		beeRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
		beeRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
		beeRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
	});
	return (
		<>
			<Panda
				position-x={pandaPositionX}
				position-y={pandaPositionY}
				position-z={pandaPositionZ}
				rotation-x={pandaRotationX}
				rotation-y={pandaRotationY}
				rotation-z={pandaRotationZ}
			/>
			<Bee
				position-x={beePositionX}
				position-y={beePositionY}
				position-z={beePositionZ}
				rotation-x={beeRotationX}
				rotation-y={beeRotationY}
				rotation-z={beeRotationZ}
			/>
		</>
	);
}
