
// Retrieve zone 1 for each sector via:
//
//   grep -E '"zone001_cluster_[0-9]+_sector[0-9]+_macro"' -o macros.xml

const MAIN_ZONES = [
	"zone001_cluster_01_sector001_macro",
	"zone001_cluster_01_sector002_macro",
	"zone001_cluster_01_sector003_macro",
	"zone001_cluster_02_sector001_macro",
	"zone001_cluster_03_sector001_macro",
	"zone001_cluster_04_sector001_macro",
	"zone001_cluster_04_sector002_macro",
	"zone001_cluster_05_sector001_macro",
	"zone001_cluster_06_sector001_macro",
	"zone001_cluster_06_sector002_macro",
	"zone001_cluster_07_sector001_macro",
	"zone001_cluster_08_sector001_macro",
	"zone001_cluster_09_sector001_macro",
	"zone001_cluster_10_sector001_macro",
	"zone001_cluster_11_sector001_macro",
	"zone001_cluster_12_sector001_macro",
	"zone001_cluster_13_sector001_macro",
	"zone001_cluster_14_sector001_macro",
	"zone001_cluster_15_sector001_macro",
	"zone001_cluster_15_sector002_macro",
	"zone001_cluster_16_sector001_macro",
	"zone001_cluster_17_sector001_macro",
	"zone001_cluster_18_sector001_macro",
	"zone001_cluster_19_sector001_macro",
	"zone001_cluster_19_sector002_macro",
	"zone001_cluster_20_sector001_macro",
	"zone001_cluster_21_sector001_macro",
	"zone001_cluster_21_sector002_macro",
	"zone001_cluster_22_sector001_macro",
	"zone001_cluster_23_sector001_macro",
	"zone001_cluster_24_sector001_macro",
	"zone001_cluster_25_sector001_macro",
	"zone001_cluster_25_sector002_macro",
	"zone001_cluster_26_sector001_macro",
	"zone001_cluster_26_sector002_macro",
	"zone001_cluster_27_sector001_macro",
	"zone001_cluster_28_sector001_macro",
	"zone001_cluster_29_sector001_macro",
	"zone001_cluster_29_sector002_macro",
	"zone001_cluster_30_sector001_macro",
	"zone001_cluster_31_sector001_macro",
	"zone001_cluster_32_sector001_macro",
	"zone001_cluster_32_sector002_macro",
	"zone001_cluster_33_sector001_macro",
	"zone001_cluster_34_sector001_macro",
	"zone001_cluster_35_sector001_macro",
	"zone001_cluster_36_sector001_macro",
	"zone001_cluster_37_sector001_macro",
	"zone001_cluster_38_sector001_macro",
	"zone001_cluster_39_sector001_macro",
	"zone001_cluster_40_sector001_macro",
	"zone001_cluster_41_sector001_macro",
	"zone001_cluster_42_sector001_macro",
	"zone001_cluster_42_sector002_macro",
	"zone001_cluster_43_sector001_macro",
	"zone001_cluster_44_sector001_macro",
	"zone001_cluster_45_sector001_macro",
	"zone001_cluster_46_sector001_macro",
	"zone001_cluster_47_sector001_macro",
	"zone001_cluster_49_sector001_macro",
	// "zone001_cluster_48_sector001_macro",  // Skip Getsu Fune, Terran hold the defense there.
	"zone001_cluster_50_sector001_macro",
	"zone001_cluster_50_sector002_macro",
];

const BORON_DLC_ZONES = [
	"zone001_cluster_600_sector001_macro",
	"zone001_cluster_601_sector001_macro",
	"zone001_cluster_602_sector001_macro",
	"zone001_cluster_603_sector001_macro",
	"zone001_cluster_604_sector001_macro",
	"zone001_cluster_605_sector001_macro",
	"zone001_cluster_606_sector001_macro",
	"zone001_cluster_607_sector001_macro",
	"zone001_cluster_607_sector002_macro",
	"zone001_cluster_607_sector003_macro",
	"zone001_cluster_608_sector001_macro",
	"zone001_cluster_609_sector001_macro",
];

const PIRATE_DLC_ZONES = [
	"zone001_cluster_500_sector001_macro",
	"zone001_cluster_500_sector002_macro",
	"zone001_cluster_500_sector003_macro",
	"zone001_cluster_501_sector001_macro",
	"zone001_cluster_502_sector001_macro",
	"zone001_cluster_503_sector001_macro",
	"zone001_cluster_504_sector001_macro",
];

// We keep Terran sectors as-is but the 3 PIO sectors we add a xenon defense platform.
const TERRAN_DLC_ZONES = [
	// "zone001_cluster_100_sector001_macro",
	// "zone001_cluster_101_sector001_macro",
	// "zone001_cluster_102_sector001_macro",
	// "zone001_cluster_103_sector001_macro",
	// "zone001_cluster_104_sector001_macro",
	// "zone001_cluster_105_sector001_macro",
	// "zone001_cluster_106_sector001_macro",
	// "zone001_cluster_107_sector001_macro",
	// "zone001_cluster_108_sector001_macro",
	// "zone001_cluster_109_sector001_macro",
	// "zone001_cluster_110_sector001_macro",
	// "zone001_cluster_111_sector001_macro",
	// "zone001_cluster_112_sector001_macro",
	"zone001_cluster_113_sector001_macro",
	"zone001_cluster_114_sector001_macro",
	"zone001_cluster_115_sector001_macro",
	// "zone001_cluster_116_sector001_macro",
];

const SPLIT_DLC_ZONES = [
	"zone001_cluster_400_sector001_macro",
	"zone001_cluster_401_sector001_macro",
	"zone001_cluster_402_sector001_macro",
	"zone001_cluster_403_sector001_macro",
	"zone001_cluster_404_sector001_macro",
	"zone001_cluster_405_sector001_macro",
	"zone001_cluster_406_sector001_macro",
	"zone001_cluster_407_sector001_macro",
	"zone001_cluster_408_sector001_macro",
	"zone001_cluster_408_sector002_macro",
	"zone001_cluster_409_sector001_macro",
	"zone001_cluster_410_sector001_macro",
	"zone001_cluster_411_sector001_macro",
	"zone001_cluster_412_sector001_macro",
	"zone001_cluster_413_sector001_macro",
	"zone001_cluster_414_sector001_macro",
	"zone001_cluster_415_sector001_macro",
	"zone001_cluster_416_sector001_macro",
	"zone001_cluster_416_sector002_macro",
	"zone001_cluster_417_sector001_macro",
	"zone001_cluster_418_sector001_macro",
	"zone001_cluster_419_sector001_macro",
	"zone001_cluster_420_sector001_macro",
	"zone001_cluster_421_sector001_macro",
	"zone001_cluster_422_sector001_macro",
	"zone001_cluster_423_sector001_macro",
	"zone001_cluster_423_sector002_macro",
	"zone001_cluster_424_sector001_macro",
	"zone001_cluster_424_sector002_macro",
	"zone001_cluster_425_sector001_macro",
];

const STATION_TEMPLATE = `<station id="$ID$" race="xenon" owner="xenon" type="defence">
	<quotas>
		<quota galaxy="1" zone="1" />
	</quotas>
	<location class="zone" macro="$ZONE$" matchextension="false" />
	<station>
		<select faction="xenon" tags="[defence]" />
		<loadout>
			<level exact="1.0" />
		</loadout>
	</station>
</station>`;

const CLUSTER_SECTOR_REGEX = /cluster_[0-9]+_sector[0-9]+/;

for (const zone of TERRAN_DLC_ZONES) {
	const cluster_sector = CLUSTER_SECTOR_REGEX.exec(zone)[0];
	const id = `xen_defence_${cluster_sector}`;
	const station = STATION_TEMPLATE.replace('$ID$', id).replace('$ZONE$', zone);
	console.log(station);
}
