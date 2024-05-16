import "./ExploreContainer.css";
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint,
} from "@capacitor/barcode-scanner";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  async function doScan() {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL,
    });
    console.log("Scan result: ", result);
  }

  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
        or try a <button onClick={doScan}>Scan</button>
      </p>
    </div>
  );
};

export default ExploreContainer;
