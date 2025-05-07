import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";

export function App() {
	const { cameraPositionX, cameraPositionY, cameraPositionZ, cameraFov } =
		useControls(
			"camera",
			{
				cameraPositionX: { value: 0, min: -10, max: 10, step: 0.01 },
				cameraPositionY: { value: 20, min: -10, max: 10, step: 0.01 },
				cameraPositionZ: { value: 25, min: -10, max: 10, step: 0.01 },
				cameraFov: { value: 75, min: 0, max: 100, step: 0.1 },
			},
			{ collapsed: true }
		);
	return (
		<>
			<Canvas
				shadows
				camera={{
					position: [cameraPositionX, cameraPositionY, cameraPositionZ],
					fov: cameraFov,
				}}>
				<ambientLight intensity={1.5} />
				<OrbitControls />
				<group>
					<ContactShadows opacity={0.32} blur={2} />
					<Experience />
				</group>
			</Canvas>
			<Leva collapsed />
		</>
	);
}

export default App;
