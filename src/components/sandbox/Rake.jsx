/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei";

export function Rake(props) {
	const { nodes, materials } = useGLTF("/models/Rake.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Hand_rake.geometry}
				material={materials.Material}
				scale={100}
			/>
		</group>
	);
}

useGLTF.preload("/models/Rake.glb");
