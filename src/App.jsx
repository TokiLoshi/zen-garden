import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { ContactShadows, OrbitControls } from "@react-three/drei";

export function App() {
	return (
		<>
			<Canvas shadows camera={{ position: [0, 2, 12], fov: 42 }}>
				<ambientLight intensity={1.5} />
				<OrbitControls />
				<group>
					<ContactShadows opacity={0.32} blur={2} />
					<Experience />
				</group>
			</Canvas>
		</>
	);
}

export default App;
