import { useControls } from "leva";
import { Crate } from "../components/sandbox/Crate";
import { Rake } from "../components/sandbox/Rake";
import { RockMed } from "../components/sandbox/RockMed";
import { RockMedOne } from "../components/sandbox/RockMedOne";
import { RockMedTwo } from "../components/sandbox/RockMedTwo";

export default function Sandbox() {
	const {
		cratePx,
		cratePy,
		cratePz,
		crateRx,
		crateRy,
		crateRz,
		crateScaleX,
		crateScaleY,
		crateScaleZ,
	} = useControls(
		"crate",
		{
			cratePx: { value: 2.5, min: -10, max: 10, step: 0.01 },
			cratePy: { value: 0, min: -10, max: 10, step: 0.01 },
			cratePz: { value: 4, min: -10, max: 10, step: 0.01 },
			crateRx: { value: 0, min: -10, max: 10, step: 0.01 },
			crateRy: { value: 0.25, min: -10, max: 10, step: 0.01 },
			crateRz: { value: 0, min: -10, max: 10, step: 0.01 },
			crateScaleX: { value: 3, min: 0.001, max: 10, step: 0.01 },
			crateScaleY: { value: 1, min: 0.001, max: 10, step: 0.01 },
			crateScaleZ: { value: 3.25, min: 0.001, max: 10, step: 0.01 },
		},
		{
			collapsed: true,
		}
	);
	const { rakePx, rakePy, rakePz, rakeRx, rakeRy, rakeRz, rakeScale } =
		useControls(
			"rake",

			{
				rakePx: { value: -3, min: -10, max: 10, step: 0.01 },
				rakePy: { value: 0.3, min: -10, max: 10, step: 0.01 },
				rakePz: { value: -1.9, min: -10, max: 10, step: 0.01 },
				rakeRx: { value: 1.7, min: -10, max: 10, step: 0.01 },
				rakeRy: { value: 1.36, min: -10, max: 10, step: 0.01 },
				rakeRz: { value: 1.49, min: -10, max: 10, step: 0.01 },
				rakeScaleX: { value: 1, min: 0.01, max: 10, step: 0.01 },
				rakeScaleY: { value: 1, min: 0.01, max: 10, step: 0.01 },
				rakeScaleZ: { value: 1, min: 0.01, max: 10, step: 0.01 },
				rakeScale: { value: 7, min: 0.01, max: 10, step: 0.01 },
			},
			{
				collapsed: true,
			}
		);
	const {
		rockMedPx,
		rockMedPy,
		rockMedPz,
		rockMedRx,
		rockMedRy,
		rockMedRz,
		rockMedScale,
	} = useControls(
		"rockMed",
		{
			rockMedPx: { value: 10, min: -10, max: 10, step: 0.01 },
			rockMedPy: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedPz: { value: -3, min: -10, max: 10, step: 0.01 },
			rockMedRx: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedRy: { value: 0.4, min: -10, max: 10, step: 0.01 },
			rockMedRz: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMedScale: { value: 1, min: 0.1, max: 10, step: 0.1 },
		},
		{ collapsed: true }
	);
	const {
		rockMed1Px,
		rockMed1Py,
		rockMed1Pz,
		rockMed1Rx,
		rockMed1Ry,
		rockMed1Rz,
		rockMed1Scale,
	} = useControls(
		"rockMedOne",
		{
			rockMed1Px: { value: -6, min: -10, max: 10, step: 0.01 },
			rockMed1Py: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed1Pz: { value: 2, min: -10, max: 10, step: 0.01 },
			rockMed1Rx: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed1Ry: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed1Rz: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed1Scale: { value: 1.3, min: 0.1, max: 5 },
		},
		{ collapsed: true }
	);
	const {
		rockMed2Px,
		rockMed2Py,
		rockMed2Pz,
		rockMed2Rx,
		rockMed2Ry,
		rockMed2Rz,
		rockMed2Scale,
	} = useControls(
		"rockMedTwo",
		{
			rockMed2Px: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed2Py: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed2Pz: { value: -3, min: -10, max: 10, step: 0.01 },
			rockMed2Rx: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed2Ry: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed2Rz: { value: 0, min: -10, max: 10, step: 0.01 },
			rockMed2Scale: { value: 1, min: 0.1, max: 10 },
		},
		{ collapsed: true }
	);
	return (
		<>
			<Crate
				position-x={cratePx}
				position-y={cratePy}
				position-z={cratePz}
				rotation-x={crateRx}
				rotation-y={crateRy}
				rotation-z={crateRz}
				scale-x={crateScaleX}
				scale-y={crateScaleY}
				scale-z={crateScaleZ}
			/>
			<Rake
				position-x={rakePx}
				position-y={rakePy}
				position-z={rakePz}
				rotation-x={rakeRx}
				rotation-y={rakeRy}
				rotation-z={rakeRz}
				scale={rakeScale}
			/>
			<RockMed
				position-x={rockMedPx}
				position-y={rockMedPy}
				position-z={rockMedPz}
				rotation-x={rockMedRx}
				rotation-y={rockMedRy}
				rotation-z={rockMedRz}
				scale={rockMedScale}
			/>
			<RockMedOne
				position-x={rockMed1Px}
				position-y={rockMed1Py}
				position-z={rockMed1Pz}
				rotation-x={rockMed1Rx}
				rotation-y={rockMed1Ry}
				rotation-z={rockMed1Rz}
				scale={rockMed1Scale}
			/>
			<RockMedTwo
				position-x={rockMed2Px}
				position-y={rockMed2Py}
				position-z={rockMed2Pz}
				rotation-x={rockMed2Rx}
				rotation-y={rockMed2Ry}
				rotation-z={rockMed2Rz}
				scale={rockMed2Scale}
			/>
		</>
	);
}
