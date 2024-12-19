import { useGLTF } from '@react-three/drei'
import { Artwork2d } from './Artwork2d'
import { Artwork3d } from './Artwork3d'

export function Gallery(props) {
  const { nodes, materials } = useGLTF('/models/ModernArtGalleryandPhotoStudioNIGHT.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials['Concrete Glossy']}
        position={[55.097, 19.209, -57.059]}
      />
      <group position={[54.755, 22.992, -70.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746.geometry}
          material={materials['Old Metal white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_1.geometry}
          material={materials['Old Metal white']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass001.geometry}
        material={materials.Glass}
        position={[54.755, 23.015, -70.001]}
      />
      <group position={[36.995, 22.992, -70.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_2.geometry}
          material={materials['Old Metal white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_3.geometry}
          material={materials['Old Metal white']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={materials.Glass}
        position={[36.995, 23.015, -70.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam004.geometry}
        material={materials['Old Metal white']}
        position={[43.916, 22.316, -71.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam.geometry}
        material={materials['Old Metal white']}
        position={[37.99, 22.316, -71.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam006.geometry}
        material={materials['Old Metal white']}
        position={[43.916, 22.23, -67.369]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam007.geometry}
        material={materials['Old Metal white']}
        position={[37.99, 22.23, -67.369]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam.geometry}
        material={materials['Old Metal white']}
        position={[43.916, 22.711, -68.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam001.geometry}
        material={materials['Old Metal white']}
        position={[43.916, 22.711, -64.745]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam002.geometry}
        material={materials['Old Metal white']}
        position={[43.916, 22.711, -62.657]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam003.geometry}
        material={materials['Old Metal white']}
        position={[43.916, 22.711, -58.486]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams.geometry}
        material={materials['Old Metal white']}
        position={[54.755, 23.069, -70.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams001.geometry}
        material={materials['Old Metal white']}
        position={[44.915, 23.069, -63.658]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams002.geometry}
        material={materials['Old Metal white']}
        position={[54.755, 23.069, -63.743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams003.geometry}
        material={materials['Old Metal white']}
        position={[44.915, 23.069, -57.4]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam004.geometry}
        material={materials['Old Metal white']}
        position={[26.156, 22.711, -68.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam005.geometry}
        material={materials['Old Metal white']}
        position={[26.156, 22.711, -64.745]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam006.geometry}
        material={materials['Old Metal white']}
        position={[26.156, 22.711, -62.657]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam007.geometry}
        material={materials['Old Metal white']}
        position={[26.156, 22.711, -58.486]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams004.geometry}
        material={materials['Old Metal white']}
        position={[36.995, 23.069, -70.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams005.geometry}
        material={materials['Old Metal white']}
        position={[27.155, 23.069, -63.658]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams006.geometry}
        material={materials['Old Metal white']}
        position={[36.995, 23.069, -63.743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams007.geometry}
        material={materials['Old Metal white']}
        position={[27.155, 23.069, -57.4]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[55.955, 19.209, -54.801]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1733.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1733_1.geometry}
          material={materials['Painted drywall']}
        />
      </group>
      <group position={[42.155, 22.992, -54.601]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_4.geometry}
          material={materials['Old Metal white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_5.geometry}
          material={materials['Old Metal white']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass002.geometry}
        material={materials.Glass}
        position={[42.155, 23.015, -54.601]}
        rotation={[0, 1.571, 0]}
      />
      <group position={[42.155, 22.992, -36.841]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_6.geometry}
          material={materials['Old Metal white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1746_7.geometry}
          material={materials['Old Metal white']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass003.geometry}
        material={materials.Glass}
        position={[42.155, 23.015, -36.841]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam008.geometry}
        material={materials['Old Metal white']}
        position={[41.155, 22.316, -43.761]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam009.geometry}
        material={materials['Old Metal white']}
        position={[41.155, 22.316, -37.836]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam010.geometry}
        material={materials['Old Metal white']}
        position={[44.787, 22.23, -43.761]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Steel_Beam011.geometry}
        material={materials['Old Metal white']}
        position={[44.787, 22.23, -37.836]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam008.geometry}
        material={materials['Old Metal white']}
        position={[43.24, 22.711, -43.761]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam009.geometry}
        material={materials['Old Metal white']}
        position={[47.411, 22.711, -43.761]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam010.geometry}
        material={materials['Old Metal white']}
        position={[49.499, 22.711, -43.761]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam011.geometry}
        material={materials['Old Metal white']}
        position={[53.671, 22.711, -43.761]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams008.geometry}
        material={materials['Old Metal white']}
        position={[42.155, 23.069, -54.601]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams009.geometry}
        material={materials['Old Metal white']}
        position={[48.498, 23.069, -44.761]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams010.geometry}
        material={materials['Old Metal white']}
        position={[48.413, 23.069, -54.601]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams011.geometry}
        material={materials['Old Metal white']}
        position={[54.756, 23.069, -44.761]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam012.geometry}
        material={materials['Old Metal white']}
        position={[43.24, 22.711, -26.001]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam013.geometry}
        material={materials['Old Metal white']}
        position={[47.411, 22.711, -26.001]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam014.geometry}
        material={materials['Old Metal white']}
        position={[49.499, 22.711, -26.001]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Beam015.geometry}
        material={materials['Old Metal white']}
        position={[53.671, 22.711, -26.001]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams012.geometry}
        material={materials['Old Metal white']}
        position={[42.155, 23.069, -36.841]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams013.geometry}
        material={materials['Old Metal white']}
        position={[48.498, 23.069, -27.001]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams014.geometry}
        material={materials['Old Metal white']}
        position={[48.413, 23.069, -36.841]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_cross_beams015.geometry}
        material={materials['Old Metal white']}
        position={[54.756, 23.069, -27.001]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outer_Walls002.geometry}
        material={materials.Plaster}
        position={[54.955, 19.209, -56.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Outer_Walls004.geometry}
        material={materials['Dark metal']}
        position={[55.955, 19.209, -54.801]}
        rotation={[0, 1.571, 0]}
      />
      <group position={[42.155, 22.639, -49.316]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1779.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1779_1.geometry}
          material={materials['Dark metal']}
        />
      </group>
      <group position={[42.155, 19.209, -50.045]} rotation={[-Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1783.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1783_1.geometry}
          material={materials['Dark metal']}
        />
      </group>
      <group position={[40.955, 22.924, -63.701]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1741.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1741_1.geometry}
          material={materials['Dark metal']}
        />
      </group>
      <group position={[48.455, 22.924, -40.801]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1741_2.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1741_3.geometry}
          material={materials['Dark metal']}
        />
      </group>
      <group position={[39.049, 19.209, -63.879]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1776.geometry}
          material={materials.Plaster}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1776_1.geometry}
          material={materials['Painted drywall']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane296.geometry}
        material={materials['Dark metal']}
        position={[39.049, 19.209, -63.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sky_volume.geometry}
        material={materials['Sky volume']}
      />
      <Artwork2d />
      <Artwork3d />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Modern_Glossy_Artpiece.geometry}
        material={materials['Mirror material']}
        position={[48.601, 19.948, -49.693]}
        scale={1.895}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench.geometry}
        material={materials['Glossy white']}
        position={[44.036, 19.457, -64.051]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench001.geometry}
        material={materials['Glossy white']}
        position={[52.787, 19.457, -66.608]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench002.geometry}
        material={materials['Glossy white']}
        position={[35.076, 19.457, -63.701]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench003.geometry}
        material={materials['Glossy white']}
        position={[49.925, 19.457, -57.507]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench004.geometry}
        material={materials['Glossy white']}
        position={[51.455, 19.457, -40.801]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench005.geometry}
        material={materials['Glossy white']}
        position={[45.456, 19.457, -40.801]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench006.geometry}
        material={materials['Glossy white']}
        position={[46.631, 19.457, -35.022]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench007.geometry}
        material={materials['Glossy white']}
        position={[46.631, 19.457, -28.886]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench008.geometry}
        material={materials['Glossy white']}
        position={[48.455, 19.502, -49.681]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench009.geometry}
        material={materials['Glossy white']}
        position={[52.107, 19.502, -46.375]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench010.geometry}
        material={materials['Glossy white']}
        position={[52.107, 19.502, -52.987]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench011.geometry}
        material={materials['Glossy white']}
        position={[44.804, 19.502, -46.375]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench012.geometry}
        material={materials['Glossy white']}
        position={[44.804, 19.502, -52.987]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <group position={[46.078, 22.524, -58.492]} rotation={[0.533, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_6.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_7.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_8.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture.geometry}
        material={materials['Dark metal']}
        position={[46.078, 22.524, -58.492]}
        scale={1.024}
      />
      <group position={[53.506, 22.524, -59.234]} rotation={[0, 0, 0.553]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture162.geometry}
        material={materials['Dark metal']}
        position={[53.506, 22.524, -59.234]}
        scale={1.024}
      />
      <group position={[53.506, 22.524, -64.909]} rotation={[0, 0, 0.553]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_12.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_13.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_14.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture163.geometry}
        material={materials['Dark metal']}
        position={[53.506, 22.524, -64.909]}
        scale={1.024}
      />
      <group position={[53.506, 22.524, -68.429]} rotation={[0, 0, 0.553]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture164.geometry}
        material={materials['Dark metal']}
        position={[53.506, 22.524, -68.429]}
        scale={1.024}
      />
      <group position={[52.77, 22.524, -68.914]} rotation={[0.764, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_9.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_10.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_11.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture165.geometry}
        material={materials['Dark metal']}
        position={[52.77, 22.524, -68.914]}
        scale={1.024}
      />
      <group position={[49.868, 22.524, -68.914]} rotation={[0.764, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_18.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_19.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_20.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture166.geometry}
        material={materials['Dark metal']}
        position={[49.868, 22.524, -68.914]}
        scale={1.024}
      />
      <group position={[47.025, 22.524, -68.914]} rotation={[0.764, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_21.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_22.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_23.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture167.geometry}
        material={materials['Dark metal']}
        position={[47.025, 22.524, -68.914]}
        scale={1.024}
      />
      <group position={[46.9, 22.524, -65.952]} rotation={[0.576, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_15.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_16.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_17.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture168.geometry}
        material={materials['Dark metal']}
        position={[46.9, 22.524, -65.952]}
        scale={1.024}
      />
      <group position={[46.722, 22.524, -68.918]} rotation={[-0.494, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_24.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_25.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_26.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture169.geometry}
        material={materials['Dark metal']}
        position={[46.722, 22.524, -68.918]}
        rotation={[0.03, 0, 0]}
        scale={1.024}
      />
      <group position={[45.066, 22.524, -62.652]} rotation={[-0.541, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_30.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_31.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_32.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture170.geometry}
        material={materials['Dark metal']}
        position={[45.066, 22.524, -62.652]}
        scale={1.024}
      />
      <group position={[39.41, 22.524, -63.623]} rotation={[0, 0, -0.585]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_27.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_28.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_29.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture171.geometry}
        material={materials['Dark metal']}
        position={[39.41, 22.524, -63.623]}
        scale={1.024}
      />
      <group position={[39.41, 22.524, -65.57]} rotation={[0.571, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_33.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_34.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_35.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture172.geometry}
        material={materials['Dark metal']}
        position={[39.41, 22.524, -65.57]}
        scale={1.024}
      />
      <group position={[39.41, 22.524, -68.727]} rotation={[0.656, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_36.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_37.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_38.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture173.geometry}
        material={materials['Dark metal']}
        position={[39.41, 22.524, -68.727]}
        scale={1.024}
      />
      <group position={[42.503, 22.524, -68.727]} rotation={[0.656, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_42.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_43.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_44.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture174.geometry}
        material={materials['Dark metal']}
        position={[42.503, 22.524, -68.727]}
        scale={1.024}
      />
      <group position={[39.409, 22.524, -69.784]} rotation={[-0.604, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_39.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_40.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_41.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture176.geometry}
        material={materials['Dark metal']}
        position={[39.409, 22.524, -69.784]}
        scale={1.024}
      />
      <group position={[46.026, 22.524, -64.748]} rotation={[-0.092, 0.033, -0.341]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture178.geometry}
        material={materials['Dark metal']}
        position={[46.026, 22.524, -64.748]}
        scale={1.024}
      />
      <group position={[53.109, 22.477, -68.871]} rotation={[-1.985, 0.293, -0.36]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle101.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle101_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle101_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture177.geometry}
        material={materials['Dark metal']}
        position={[53.109, 22.524, -68.887]}
        scale={1.024}
      />
      <group position={[46.568, 22.477, -58.496]} rotation={[-1.183, -0.327, 2.697]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle101_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle101_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle101_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture179.geometry}
        material={materials['Dark metal']}
        position={[46.566, 22.524, -58.48]}
        rotation={[-Math.PI, 0.087, -Math.PI]}
        scale={1.024}
      />
      <group position={[53.438, 22.477, -58.493]} rotation={[-1.085, 0.134, -2.673]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle103.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle103_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle103_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture180.geometry}
        material={materials['Dark metal']}
        position={[53.451, 22.524, -58.483]}
        rotation={[Math.PI, -0.924, Math.PI]}
        scale={1.024}
      />
      <group position={[46.046, 22.477, -68.898]} rotation={[-2.056, -0.134, 0.469]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle103_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle103_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle103_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture181.geometry}
        material={materials['Dark metal']}
        position={[46.033, 22.524, -68.908]}
        rotation={[0, 0.924, 0]}
        scale={1.024}
      />
      <group position={[52.252, 22.524, -64.748]} rotation={[0.352, 0.187, 0.049]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture182.geometry}
        material={materials['Dark metal']}
        position={[52.252, 22.524, -64.748]}
        scale={1.024}
      />
      <group position={[39.416, 22.524, -58.383]} rotation={[-0.455, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_48.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_49.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_50.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture183.geometry}
        material={materials['Dark metal']}
        position={[39.416, 22.524, -58.383]}
        scale={1.024}
      />
      <group position={[42.491, 22.524, -58.383]} rotation={[-0.455, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_45.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_46.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_47.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture184.geometry}
        material={materials['Dark metal']}
        position={[42.491, 22.524, -58.383]}
        scale={1.024}
      />
      <group position={[49.881, 22.524, -58.479]} rotation={[-0.147, 0.187, 0.049]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_6.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_7.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_8.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture185.geometry}
        material={materials['Dark metal']}
        position={[49.881, 22.524, -58.479]}
        scale={1.024}
      />
      <group position={[50.87, 24.289, -48.242]} rotation={[-1.401, 0.286, 0.694]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle105.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle105_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle105_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture188.geometry}
        material={materials['Dark metal']}
        position={[50.855, 22.814, -48.248]}
        rotation={[0, 1.359, -Math.PI]}
        scale={1.024}
      />
      <group position={[46.051, 24.289, -50.827]} rotation={[-1.74, -0.286, -2.448]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle105_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle105_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle105_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture189.geometry}
        material={materials['Dark metal']}
        position={[46.066, 22.814, -50.821]}
        rotation={[Math.PI, -1.359, 0]}
        scale={1.024}
      />
      <group position={[50.588, 24.228, -50.35]} rotation={[-1.865, 0.144, 2.362]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle109.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle109_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle109_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture190.geometry}
        material={materials['Dark metal']}
        position={[50.582, 22.753, -50.335]}
        rotation={[-Math.PI, 0.161, 0]}
        scale={1.024}
      />
      <group position={[45.624, 24.228, -48.206]} rotation={[-1.273, -0.148, -0.779]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle109_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle109_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle109_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture191.geometry}
        material={materials['Dark metal']}
        position={[45.629, 22.753, -48.221]}
        rotation={[0, -0.161, -Math.PI]}
        scale={1.024}
      />
      <group position={[48.447, 24.289, -50.706]} rotation={[-1.89, -0.089, 3.073]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture186.geometry}
        material={materials['Dark metal']}
        position={[48.454, 22.814, -50.691]}
        rotation={[Math.PI, -0.586, 0]}
        scale={1.024}
      />
      <group position={[48.454, 24.289, -47.963]} rotation={[-1.252, 0.089, -0.069]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_6.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_7.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_8.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture187.geometry}
        material={materials['Dark metal']}
        position={[48.447, 22.814, -47.978]}
        rotation={[0, 0.586, -Math.PI]}
        scale={1.024}
      />
      <group position={[51.073, 24.289, -49.625]} rotation={[-1.665, 0.318, 1.531]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture192.geometry}
        material={materials['Dark metal']}
        position={[51.058, 22.814, -49.618]}
        rotation={[-Math.PI, 0.985, 0]}
        scale={1.024}
      />
      <group position={[45.316, 24.289, -49.618]} rotation={[-1.477, -0.318, -1.61]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_9.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_10.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle111_11.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture193.geometry}
        material={materials['Dark metal']}
        position={[45.33, 22.814, -49.625]}
        rotation={[0, -0.985, -Math.PI]}
        scale={1.024}
      />
      <group position={[45.885, 22.38, -51.114]} rotation={[0, 0, 0.505]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_54.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_55.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_56.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture194.geometry}
        material={materials['Dark metal']}
        position={[45.885, 22.38, -51.114]}
        scale={1.024}
      />
      <group position={[45.885, 22.38, -48.254]} rotation={[0, 0, 0.505]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_60.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_61.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_62.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture195.geometry}
        material={materials['Dark metal']}
        position={[45.885, 22.38, -48.254]}
        scale={1.024}
      />
      <group position={[50.897, 22.38, -48.254]} rotation={[0, 0, -0.399]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_51.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_52.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_53.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture196.geometry}
        material={materials['Dark metal']}
        position={[50.897, 22.38, -48.254]}
        scale={1.024}
      />
      <group position={[50.897, 22.38, -51.119]} rotation={[0, 0, -0.399]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_63.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_64.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_65.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture197.geometry}
        material={materials['Dark metal']}
        position={[50.897, 22.38, -51.119]}
        scale={1.024}
      />
      <group position={[43.25, 22.524, -54.256]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_12.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_13.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_14.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture198.geometry}
        material={materials['Dark metal']}
        position={[43.25, 22.524, -54.256]}
        scale={1.024}
      />
      <group position={[43.25, 22.524, -45.026]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_15.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_16.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_17.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture199.geometry}
        material={materials['Dark metal']}
        position={[43.25, 22.524, -45.026]}
        scale={1.024}
      />
      <group position={[53.682, 22.524, -45.026]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_9.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_10.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_11.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture200.geometry}
        material={materials['Dark metal']}
        position={[53.682, 22.524, -45.026]}
        scale={1.024}
      />
      <group position={[53.682, 22.524, -54.279]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_18.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_19.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_20.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture201.geometry}
        material={materials['Dark metal']}
        position={[53.682, 22.524, -54.279]}
        scale={1.024}
      />
      <group position={[48.461, 22.38, -54.464]} rotation={[-0.709, -Math.PI / 2, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_69.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_70.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_71.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture202.geometry}
        material={materials['Dark metal']}
        position={[48.461, 22.38, -54.464]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.024}
      />
      <group position={[48.461, 22.38, -44.902]} rotation={[0.709, Math.PI / 2, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_78.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_79.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_80.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture203.geometry}
        material={materials['Dark metal']}
        position={[48.461, 22.38, -44.902]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.024}
      />
      <group position={[32.081, 22.524, -58.495]} rotation={[-1.006, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_57.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_58.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_59.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture204.geometry}
        material={materials['Dark metal']}
        position={[32.081, 22.524, -58.495]}
        scale={1.024}
      />
      <group position={[34.166, 22.524, -60.977]} rotation={[0, 0, -0.612]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_81.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_82.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_83.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture205.geometry}
        material={materials['Dark metal']}
        position={[34.166, 22.524, -60.977]}
        scale={1.024}
      />
      <group position={[34.166, 22.524, -66.196]} rotation={[0, 0, -0.612]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_84.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_85.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_86.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture206.geometry}
        material={materials['Dark metal']}
        position={[34.166, 22.524, -66.196]}
        scale={1.024}
      />
      <group position={[35.754, 22.524, -63.715]} rotation={[0, 0, 0.439]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_87.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_88.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_89.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture207.geometry}
        material={materials['Dark metal']}
        position={[35.754, 22.524, -63.715]}
        scale={1.024}
      />
      <group position={[30.264, 22.524, -60.977]} rotation={[0, 0, 0.559]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_66.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_67.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_68.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture208.geometry}
        material={materials['Dark metal']}
        position={[30.264, 22.524, -60.977]}
        scale={1.024}
      />
      <group position={[30.264, 22.524, -66.196]} rotation={[0, 0, 0.559]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_90.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_91.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_92.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture209.geometry}
        material={materials['Dark metal']}
        position={[30.264, 22.524, -66.196]}
        scale={1.024}
      />
      <group position={[27.635, 22.524, -68.664]} rotation={[0, 0, -0.576]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_93.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_94.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_95.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture210.geometry}
        material={materials['Dark metal']}
        position={[27.635, 22.524, -68.664]}
        scale={1.024}
      />
      <group position={[27.635, 22.524, -63.698]} rotation={[0, 0, -0.576]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_96.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_97.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_98.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture211.geometry}
        material={materials['Dark metal']}
        position={[27.635, 22.524, -63.698]}
        scale={1.024}
      />
      <group position={[27.635, 22.524, -58.78]} rotation={[0, 0, -0.576]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_72.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_73.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_74.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture212.geometry}
        material={materials['Dark metal']}
        position={[27.635, 22.524, -58.78]}
        scale={1.024}
      />
      <group position={[27.634, 22.524, -59.52]} rotation={[0.611, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_102.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_103.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_104.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture213.geometry}
        material={materials['Dark metal']}
        position={[27.634, 22.524, -59.52]}
        scale={1.024}
      />
      <group position={[27.634, 22.524, -62.938]} rotation={[-0.523, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_105.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_106.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_107.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture214.geometry}
        material={materials['Dark metal']}
        position={[27.634, 22.524, -62.938]}
        scale={1.024}
      />
      <group position={[27.634, 22.524, -64.46]} rotation={[0.654, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_108.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_109.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_110.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture215.geometry}
        material={materials['Dark metal']}
        position={[27.634, 22.524, -64.46]}
        scale={1.024}
      />
      <group position={[27.634, 22.524, -67.872]} rotation={[-0.443, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_75.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_76.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_77.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture216.geometry}
        material={materials['Dark metal']}
        position={[27.634, 22.524, -67.872]}
        scale={1.024}
      />
      <group position={[30.51, 22.524, -68.893]} rotation={[0.87, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_111.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_112.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_113.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture217.geometry}
        material={materials['Dark metal']}
        position={[30.51, 22.524, -68.893]}
        scale={1.024}
      />
      <group position={[33.41, 22.524, -68.893]} rotation={[0.87, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_114.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_115.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_116.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture218.geometry}
        material={materials['Dark metal']}
        position={[33.41, 22.524, -68.893]}
        scale={1.024}
      />
      <group position={[35.066, 22.524, -63.766]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_21.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_22.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_23.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture219.geometry}
        material={materials['Dark metal']}
        position={[35.066, 22.524, -63.766]}
        scale={1.024}
      />
      <group position={[35.601, 22.477, -68.871]} rotation={[-1.985, 0.293, -0.36]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle092.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle092_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle092_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture220.geometry}
        material={materials['Dark metal']}
        position={[35.601, 22.524, -68.887]}
        scale={1.024}
      />
      <group position={[29.06, 22.477, -58.496]} rotation={[-1.183, -0.327, 2.697]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle092_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle092_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle092_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture221.geometry}
        material={materials['Dark metal']}
        position={[29.058, 22.524, -58.48]}
        rotation={[-Math.PI, 0.087, -Math.PI]}
        scale={1.024}
      />
      <group position={[35.93, 22.477, -58.493]} rotation={[-1.085, 0.134, -2.673]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle094.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle094_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle094_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture222.geometry}
        material={materials['Dark metal']}
        position={[35.943, 22.524, -58.483]}
        rotation={[Math.PI, -0.924, Math.PI]}
        scale={1.024}
      />
      <group position={[28.538, 22.477, -68.898]} rotation={[-2.056, -0.134, 0.469]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle094_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle094_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle094_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture223.geometry}
        material={materials['Dark metal']}
        position={[28.526, 22.524, -68.908]}
        rotation={[0, 0.924, 0]}
        scale={1.024}
      />
      <group position={[43.334, 22.524, -39.262]} rotation={[-0.538, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_99.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_100.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_101.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture224.geometry}
        material={materials['Dark metal']}
        position={[43.334, 22.524, -39.262]}
        scale={1.024}
      />
      <group position={[43.002, 22.524, -39.262]} rotation={[0, 0, -0.536]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_120.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_121.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_122.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture225.geometry}
        material={materials['Dark metal']}
        position={[43.002, 22.524, -39.262]}
        scale={1.024}
      />
      <group position={[43.002, 22.524, -42.352]} rotation={[0, 0, -0.536]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_123.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_124.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_125.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture226.geometry}
        material={materials['Dark metal']}
        position={[43.002, 22.524, -42.352]}
        scale={1.024}
      />
      <group position={[49.935, 22.524, -39.262]} rotation={[-0.538, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_129.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_130.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_131.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture227.geometry}
        material={materials['Dark metal']}
        position={[49.935, 22.524, -39.262]}
        scale={1.024}
      />
      <group position={[53.838, 22.524, -39.262]} rotation={[0, 0, 0.635]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_117.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_118.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_119.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture228.geometry}
        material={materials['Dark metal']}
        position={[53.838, 22.524, -39.262]}
        scale={1.024}
      />
      <group position={[53.838, 22.524, -42.346]} rotation={[0, 0, 0.635]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_132.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_133.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_134.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture229.geometry}
        material={materials['Dark metal']}
        position={[53.838, 22.524, -42.346]}
        scale={1.024}
      />
      <group position={[53.673, 22.524, -33.489]} rotation={[0, 0, -0.475]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_135.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_136.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_137.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture230.geometry}
        material={materials['Dark metal']}
        position={[53.673, 22.524, -33.489]}
        scale={1.024}
      />
      <group position={[51.311, 22.524, -42.348]} rotation={[-0.337, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_27.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_28.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_29.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture231.geometry}
        material={materials['Dark metal']}
        position={[51.311, 22.524, -42.348]}
        scale={1.024}
      />
      <group position={[45.542, 22.524, -42.348]} rotation={[-0.337, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_24.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_25.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_26.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture232.geometry}
        material={materials['Dark metal']}
        position={[45.542, 22.524, -42.348]}
        scale={1.024}
      />
      <group position={[53.673, 22.524, -30.321]} rotation={[0, 0, -0.475]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_138.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_139.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_140.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture233.geometry}
        material={materials['Dark metal']}
        position={[53.673, 22.524, -30.321]}
        scale={1.024}
      />
      <group position={[53.673, 22.524, -30.631]} rotation={[0, 0, 0.749]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_141.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_142.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_143.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture234.geometry}
        material={materials['Dark metal']}
        position={[53.673, 22.524, -30.631]}
        scale={1.024}
      />
      <group position={[53.673, 22.524, -33.226]} rotation={[0, 0, 0.749]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_147.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_148.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_149.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture235.geometry}
        material={materials['Dark metal']}
        position={[53.673, 22.524, -33.226]}
        scale={1.024}
      />
      <group position={[53.673, 22.524, -27.988]} rotation={[-0.772, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_126.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_127.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_128.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture236.geometry}
        material={materials['Dark metal']}
        position={[53.673, 22.524, -27.988]}
        scale={1.024}
      />
      <group position={[47.645, 22.524, -27.988]} rotation={[-0.772, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_150.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_151.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_152.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture237.geometry}
        material={materials['Dark metal']}
        position={[47.645, 22.524, -27.988]}
        scale={1.024}
      />
      <group position={[45.336, 22.524, -27.988]} rotation={[-0.772, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_153.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_154.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_155.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture238.geometry}
        material={materials['Dark metal']}
        position={[45.336, 22.524, -27.988]}
        scale={1.024}
      />
      <group position={[43.233, 22.524, -28.897]} rotation={[0, 0, -0.858]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_159.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_160.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_161.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture239.geometry}
        material={materials['Dark metal']}
        position={[43.233, 22.524, -28.897]}
        scale={1.024}
      />
      <group position={[43.233, 22.524, -33.587]} rotation={[0, 0, -0.858]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_144.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_145.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_146.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture240.geometry}
        material={materials['Dark metal']}
        position={[43.233, 22.524, -33.587]}
        scale={1.024}
      />
      <group position={[43.233, 22.524, -36.483]} rotation={[0, 0, -0.858]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_162.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_163.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_164.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture241.geometry}
        material={materials['Dark metal']}
        position={[43.233, 22.524, -36.483]}
        scale={1.024}
      />
      <group position={[42.915, 22.524, -36.052]} rotation={[0.714, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_165.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_166.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_167.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture242.geometry}
        material={materials['Dark metal']}
        position={[42.915, 22.524, -36.052]}
        scale={1.024}
      />
      <group position={[46.685, 22.524, -33.784]} rotation={[-0.654, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_168.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_169.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_170.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture243.geometry}
        material={materials['Dark metal']}
        position={[46.685, 22.524, -33.784]}
        scale={1.024}
      />
      <group position={[46.685, 22.524, -30.107]} rotation={[0.646, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_156.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_157.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_158.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture244.geometry}
        material={materials['Dark metal']}
        position={[46.685, 22.524, -30.107]}
        scale={1.024}
      />
      <group position={[49.502, 22.524, -30.405]} rotation={[0, 0, 0.612]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_171.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_172.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_173.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture245.geometry}
        material={materials['Dark metal']}
        position={[49.502, 22.524, -30.405]}
        scale={1.024}
      />
      <group position={[49.502, 22.524, -33.597]} rotation={[0, 0, 0.612]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_174.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_175.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_176.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture246.geometry}
        material={materials['Dark metal']}
        position={[49.502, 22.524, -33.597]}
        scale={1.024}
      />
      <group position={[49.502, 22.524, -36.184]} rotation={[0.714, 0, 0]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_177.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_178.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle073_179.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture247.geometry}
        material={materials['Dark metal']}
        position={[49.502, 22.524, -36.184]}
        scale={1.024}
      />
      <group position={[43.28, 22.477, -35.65]} rotation={[-1.889, -0.395, 1.085]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle096.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle096_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle096_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture248.geometry}
        material={materials['Dark metal']}
        position={[43.264, 22.524, -35.65]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.024}
      />
      <group position={[53.655, 22.477, -28.734]} rotation={[-1.219, 0.366, -2.146]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle096_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle096_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle096_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture249.geometry}
        material={materials['Dark metal']}
        position={[53.671, 22.524, -28.732]}
        rotation={[Math.PI, -1.483, Math.PI]}
        scale={1.024}
      />
      <group position={[53.658, 22.477, -35.604]} rotation={[-1.722, 0.481, -1.032]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle098.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle098_1.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle098_2.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture250.geometry}
        material={materials['Dark metal']}
        position={[53.668, 22.524, -35.617]}
        rotation={[0, -0.647, 0]}
        scale={1.024}
      />
      <group position={[43.253, 22.477, -28.212]} rotation={[-1.42, -0.481, 2.11]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle098_3.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle098_4.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle098_5.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture251.geometry}
        material={materials['Dark metal']}
        position={[43.243, 22.524, -28.199]}
        rotation={[-Math.PI, 0.647, -Math.PI]}
        scale={1.024}
      />
      <group position={[46.667, 22.524, -35.05]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_30.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_31.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_32.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture252.geometry}
        material={materials['Dark metal']}
        position={[46.667, 22.524, -35.05]}
        scale={1.024}
      />
      <group position={[46.667, 22.524, -28.897]} scale={1.024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_33.geometry}
          material={materials['Glossy white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_34.geometry}
          material={materials['Dark metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle099_35.geometry}
          material={materials.Light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture253.geometry}
        material={materials['Dark metal']}
        position={[46.667, 22.524, -28.897]}
        scale={1.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spot_light_fixture001.geometry}
        material={materials['Dark metal']}
        position={[27.487, 22.524, -69.104]}
        scale={1.024}
      />
    </group>
  )
}

useGLTF.preload('/models/ModernArtGalleryAndPhotoStudioNIGHT.glb')
