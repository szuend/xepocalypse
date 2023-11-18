
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
	"zone001_cluster_48_sector001_macro",
	"zone001_cluster_50_sector001_macro",
	"zone001_cluster_50_sector002_macro",
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

for (const zone of MAIN_ZONES) {
	const cluster_sector = CLUSTER_SECTOR_REGEX.exec(zone)[0];
	const id = `xen_defence_${cluster_sector}`;
	const station = STATION_TEMPLATE.replace('$ID$', id).replace('$ZONE$', zone);
	console.log(station);
}
