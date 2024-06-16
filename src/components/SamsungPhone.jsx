/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ossssn (https://sketchfab.com/ossssn)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galaxy-s23-ultra-green-53b8afbb68b84b35b17001013adaf9de
Title: Galaxy-s23-ultra-green
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/galaxy-s23-ultra-green.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AF_Sensor_Glass.geometry}
        material={materials.AF_Sensor_Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zoom_Cam.geometry}
        material={materials.Zoom_Cam}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Display_ActiveArea.geometry}
        material={materials.Display_ActiveArea}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Samsung_Logo.geometry}
        material={materials.Samsung_Logo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Cam_Deco_Black.geometry}
        material={materials.Back_Cam_Deco_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Cam_Deco.geometry}
        material={materials.Back_Cam_Deco}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Flash.geometry}
        material={materials.Flash}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cam_Glass.geometry}
        material={materials.Cam_Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Usb_2.geometry}
        material={materials.Usb_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Flash_Glass.geometry}
        material={materials.Flash_Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Antenna_Plastic.geometry}
        material={materials.Antenna_Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cam_Lens.geometry}
        material={materials.Cam_Lens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cam_Body.geometry}
        material={materials.Cam_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bezel.geometry}
        material={materials.Bezel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cam_Bezel.geometry}
        material={materials.Cam_Bezel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Usb_1.geometry}
        material={materials.Usb_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rearcase_Hole.geometry}
        material={materials.Rearcase_Hole}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Cover_Glass.geometry}
        material={materials.Back_Cover_Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.S_Pen_Tip.geometry}
        material={materials.Rearcase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rear_Case.geometry}
        material={materials.Rearcase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cam_Mt.geometry}
        material={materials.Black_Hole}
      />
    </group>
  );
}

useGLTF.preload("/models/galaxy-s23-ultra-green.glb");

export default Model;
