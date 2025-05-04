import { useControls } from "leva";
import { Clover } from "../components/plants/Clover";
import { Fern } from "../components/plants/Fern";
import { Flowers } from "../components/plants/Flowers";
import { Mushrooms } from "../components/plants/Mushrooms";
import { Pine } from "../components/plants/Pine";

export default function Plants() {
	const {
		cloverPositionX,
		cloverPositionY,
		cloverPositionZ,
		cloverRotationX,
		cloverRotationY,
		cloverRotationZ,
	} = useControls(
		"clover",
		{
			cloverPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			cloverPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			cloverPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			cloverRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			cloverRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			cloverRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const {
		fernPositionX,
		fernPositionY,
		fernPositionZ,
		fernRotationX,
		fernRotationY,
		fernRotationZ,
	} = useControls(
		"fern",
		{
			fernPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			fernPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			fernPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			fernRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			fernRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			fernRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const {
		flowersPositionX,
		flowersPositionY,
		flowersPositionZ,
		flowersRotationX,
		flowersRotationY,
		flowersRotationZ,
	} = useControls(
		"flowers",
		{
			flowersPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			flowersPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			flowersPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			flowersRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			flowersRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			flowersRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const {
		mushroomsPositionX,
		mushroomsPositionY,
		mushroomsPositionZ,
		mushroomsRotationX,
		mushroomsRotationY,
		mushroomsRotationZ,
	} = useControls(
		"mushrooms",
		{
			mushroomsPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			mushroomsPositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			mushroomsPositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			mushroomsRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			mushroomsRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			mushroomsRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	const {
		pinePositionX,
		pinePositionY,
		pinePositionZ,
		pineRotationX,
		pineRotationY,
		pineRotationZ,
	} = useControls(
		"pine",
		{
			pinePositionX: { value: 0, min: -10, max: 10, step: 0.01 },
			pinePositionY: { value: 0, min: -10, max: 10, step: 0.01 },
			pinePositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
			pineRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
			pineRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
			pineRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
		},
		{ collapsed: true }
	);
	return (
		<>
			<Clover
				position-x={cloverPositionX}
				position-y={cloverPositionY}
				position-z={cloverPositionZ}
				rotation-x={cloverRotationX}
				rotation-y={cloverRotationY}
				rotation-z={cloverRotationZ}
			/>
			<Fern
				position-x={fernPositionX}
				position-y={fernPositionY}
				position-z={fernPositionZ}
				rotation-x={fernRotationX}
				rotation-y={fernRotationY}
				rotation-z={fernRotationZ}
			/>
			<Flowers
				position-x={flowersPositionX}
				position-y={flowersPositionY}
				position-z={flowersPositionZ}
				rotation-x={flowersRotationX}
				rotation-y={flowersRotationY}
				rotation-z={flowersRotationZ}
			/>
			<Mushrooms
				position-x={mushroomsPositionX}
				position-y={mushroomsPositionY}
				position-z={mushroomsPositionZ}
				rotation-x={mushroomsRotationX}
				rotation-y={mushroomsRotationY}
				rotation-z={mushroomsRotationZ}
			/>
			<Pine
				position-x={pinePositionX}
				position-y={pinePositionY}
				position-z={pinePositionZ}
				rotation-x={pineRotationX}
				rotation-y={pineRotationY}
				rotation-z={pineRotationZ}
			/>
		</>
	);
}
