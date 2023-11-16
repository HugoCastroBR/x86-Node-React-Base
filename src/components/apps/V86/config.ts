export const BOOT_CD_FD_HD = 0x213;
export const BOOT_FD_CD_HD = 0x231;

export const config = {
  autostart: true,
  bios: { url: "/lib/bios/seabios.bin" },
  log_level: 0,
  network_relay_url: "wss://relay.widgetry.org/",
  vga_bios: { url: "/lib/bios/vgabios.bin" },
  wasm_path: "/lib/v86.wasm",
};

export const saveExtension = ".bin.save";
