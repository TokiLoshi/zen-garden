/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei";

export function Flowers(props) {
	const { nodes, materials } = useGLTF("/models/Flowers.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Flower_4_Group_1.geometry}
				material={materials.Leaves}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Flower_4_Group_2.geometry}
				material={materials.Flowers}
			/>
		</group>
	);
}

useGLTF.preload("/models/Flowers.glb");
