export type SystemId = 'battery' | 'drive' | 'optics' | 'cabin' | 'autopilot' | 'chassis' | 'door'
export const systems = {
  drive: {
    index: '01', label: 'Electric drive', category: 'Power delivery', title: 'Electricity,\ninto motion.',
    short: 'Explore the drive unit',
    description: 'The electric motor turns electrical energy into rotation. A reduction gear transfers that rotation to the wheels.',
    benefit: 'Control of motor torque gives the driver a responsive connection to the wheels.',
    image: '/media/drive-blue.png', anchor: { x: 25, y: 48 },
    points: [
      { label: 'Stator windings', text: 'Stationary windings create a rotating magnetic field.', x: 32, y: 46 },
      { label: 'Rotor', text: 'The rotor turns within the stator and drives the shaft.', x: 24, y: 49 },
      { label: 'Reduction gear', text: 'Gearing lowers rotational speed and increases wheel torque.', x: 48, y: 51 },
    ],
  },
  optics: {
    index: '02', label: 'Matrix LED optics', category: 'Vision & lighting', title: 'Light,\nshaped precisely.',
    short: 'Explore headlamp optics',
    description: 'Inside this headlamp assembly, matrix LED emitters and an optical projection lens shape high-precision adaptive beam patterns.',
    benefit: 'Adaptive matrix lighting illuminates dark road curves without glaring oncoming drivers.',
    image: '/media/lenses-blue.png', anchor: { x: 35, y: 56 },
    points: [
      { label: 'Projection lens', text: 'The optical lens directs the light into the designed beam pattern.', x: 32.9, y: 55.7 },
      { label: 'LED module', text: 'The light source sits behind the projection optics.', x: 50.3, y: 57.2 },
      { label: 'Heat sink', text: 'Metal fins dissipate heat from the light-source assembly.', x: 61.9, y: 56.3 },
    ],
  },
  autopilot: {
    index: '03', label: 'Tesla Vision & Autopilot', category: 'Autonomous intelligence', title: 'Perception,\nin real time.',
    short: 'Explore Autopilot suite',
    description: 'Dual redundant neural processors ingest 8 external optical cameras, executing spatial occupancy networks for 360-degree real-time autonomous navigation.',
    benefit: 'Active collision prevention, predictive path planning, and hands-on driver assistance.',
    image: '/media/autopilot-blue.png', anchor: { x: 49, y: 44 },
    points: [
      { label: 'Dual FSD Processors', text: 'Redundant neural network processors execute real-time 3D spatial occupancy networks.', x: 34.5, y: 42.0 },
      { label: 'Optical Camera Array', text: 'Multi-layer optical lenses deliver 360-degree perimeter visibility up to 250 meters.', x: 63.5, y: 38.0 },
      { label: 'Ethernet & Power Hub', text: 'Shielded high-speed automotive bus routes telemetry between sensor clusters and actuators.', x: 52.0, y: 68.0 },
    ],
  },
  cabin: {
    index: '06', label: 'Cabin architecture', category: 'Cabin & structure', title: 'Simplicity,\nengineered.',
    short: 'Explore cabin architecture',
    description: 'A rigid safety cell with structural acoustic glass encloses a minimalist cockpit centered around real-time vehicle telemetry.',
    benefit: 'Expansive panoramic visibility, low aerodynamic drag, and acoustic tranquility.',
    image: '/media/cabin-blue.png', anchor: { x: 58, y: 38 },
    points: [
      { label: 'Touchscreen display', text: 'A 15.4-inch display coordinates all vehicle telemetry, climate, and autonomy.', x: 53.5, y: 36.5 },
      { label: 'Acoustic glass roof', text: 'Dual-layer tinted acoustic glass rejects 98% of UV rays while expanding headroom.', x: 35.0, y: 22.0 },
      { label: 'Octovalve system', text: 'High-efficiency heat pump and thermal manifold route energy across cabin and pack.', x: 56.5, y: 53.0 },
    ],
  },
  door: {
    index: '07', label: 'Door & interior', category: 'Interior & acoustics', title: 'Inside,\nuncompromised.',
    short: 'Explore door & interior',
    description: 'The driver door reveals an acoustic sanctuary engineered with dual-pane laminated glass, integrated 17-speaker spatial audio, and sculpted ergonomic touchpoints.',
    benefit: 'Effortless ingress and whisper-quiet acoustic isolation for an elevated driving environment.',
    image: '/media/door-blue.png', anchor: { x: 64, y: 49 },
    points: [
      { label: 'Acoustic dual-pane glass', text: 'Laminated dual-pane acoustic glass creates an impenetrable barrier against wind and road noise.', x: 67.0, y: 28.0 },
      { label: 'Concealed acoustic drivers', text: 'Precision door-mounted mid-range and bass woofers engineered for distortion-free spatial acoustics.', x: 55.0, y: 65.0 },
      { label: 'Armrest & electronic latch', text: 'Sculpted soft-touch armrest with flush window switches and electronic push-button door release.', x: 65.0, y: 56.0 },
    ],
  },
  battery: {
    index: '08', label: 'Battery architecture', category: 'Energy storage', title: 'The energy\nbeneath you.',
    short: 'Explore the battery pack',
    description: 'A traction battery stores electrical energy and supplies it to the drive system. In this concept, it sits low beneath the cabin.',
    benefit: 'A low, flat package leaves the cabin above it open.',
    image: '/media/battery-blue.png', anchor: { x: 64, y: 72 },
    points: [
      { label: 'Cell modules', text: 'Cells grouped into modules store the energy.', x: 31, y: 42 },
      { label: 'High-voltage connection', text: 'Orange connections mark the high-voltage electrical path in this illustration.', x: 27, y: 55 },
      { label: 'Protective enclosure', text: 'The pack housing supports and protects the assembly.', x: 49, y: 49 },
    ],
  },
  chassis: {
    index: '09', label: 'Performance chassis', category: 'Chassis & dynamics', title: 'Precision,\nengineered.',
    short: 'Explore performance chassis',
    description: 'Lightweight aluminum subframe with independent coilover dampers and track-grade carbon-ceramic brakes ensure razor-sharp vehicle control.',
    benefit: 'Instant regenerative deceleration blends seamlessly with track-grade stopping power.',
    image: '/media/chassis-blue.png', anchor: { x: 76, y: 64 },
    points: [
      { label: 'Carbon-ceramic rotor', text: 'Cross-drilled carbon-ceramic composite rotor provides immense fade-free thermal resistance.', x: 77.0, y: 65.0 },
      { label: 'Monobloc caliper', text: 'Stiff red multi-piston aluminum caliper applies direct, balanced hydraulic clamping force.', x: 83.5, y: 55.0 },
      { label: 'Coilover suspension', text: 'Progressive coilover damper and aluminum wishbones maximize tire contact and grip.', x: 67.5, y: 30.0 },
    ],
  },
} as const
export const systemIds: SystemId[] = ['drive', 'optics', 'autopilot', 'cabin', 'door', 'battery', 'chassis']
export type HotspotId = SystemId | 'wheels' | 'paint'
export const hotspots: { id: HotspotId; index: string; label: string; anchor: { x: number; y: number }; target: SystemId | null }[] = [
  { id: 'drive', index: systems.drive.index, label: systems.drive.label, anchor: systems.drive.anchor, target: 'drive' },
  { id: 'optics', index: systems.optics.index, label: systems.optics.label, anchor: systems.optics.anchor, target: 'optics' },
  { id: 'autopilot', index: systems.autopilot.index, label: systems.autopilot.label, anchor: systems.autopilot.anchor, target: 'autopilot' },
  { id: 'wheels', index: '04', label: 'Wheel design', anchor: { x: 48, y: 71 }, target: null },
  { id: 'paint', index: '05', label: 'Body colour', anchor: { x: 55, y: 51 }, target: null },
  { id: 'cabin', index: systems.cabin.index, label: systems.cabin.label, anchor: systems.cabin.anchor, target: 'cabin' },
  { id: 'door', index: systems.door.index, label: systems.door.label, anchor: systems.door.anchor, target: 'door' },
  { id: 'battery', index: systems.battery.index, label: systems.battery.label, anchor: systems.battery.anchor, target: 'battery' },
  { id: 'chassis', index: systems.chassis.index, label: systems.chassis.label, anchor: systems.chassis.anchor, target: 'chassis' },
]

export const clips: Record<SystemId, { forward: string; reverse: string; enabled: boolean }> = {
  battery: { forward: '/media/battery-forward.mp4', reverse: '/media/battery-reverse.mp4', enabled: false },
  drive: { forward: '/media/drive-forward.mp4', reverse: '/media/drive-reverse.mp4', enabled: false },
  optics: { forward: '/media/optics-forward.mp4', reverse: '/media/optics-reverse.mp4', enabled: false },
  cabin: { forward: '', reverse: '', enabled: false },
  autopilot: { forward: '', reverse: '', enabled: false },
  chassis: { forward: '', reverse: '', enabled: false },
  door: { forward: '', reverse: '', enabled: false },
}
