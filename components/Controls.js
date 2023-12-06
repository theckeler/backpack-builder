import WrapperButton from "@/components/Wrappers/Button";
import { Icons } from "@/images/Icons";

export default function ControlsIndex({ menu, menuChange }) {
  return (
    <>
      <div className="max-w-fit">
        <WrapperButton
          ariaLabel="Van Details"
          open={menu.vanDetails.open}
          onClick={() => {
            menuChange({ vanDetails: true });
          }}
        >
          <Icons icon={menu.vanDetails.open ? "close" : "van"} />
        </WrapperButton>
      </div>

      <div className="max-w-fit">
        <WrapperButton
          ariaLabel="Controls to zoom the van"
          onClick={() => {
            menuChange({ zoom: true });
          }}
          open={menu.zoom.open}
        >
          <Icons icon={menu.zoom.open ? "close" : "zoom"} />
        </WrapperButton>
      </div>

      <div className="max-w-fit">
        <WrapperButton
          ariaLabel="Controls to rotate the van."
          onClick={() => {
            menuChange({ rotate: true });
          }}
          open={menu.rotate.open}
        >
          <Icons icon={menu.rotate?.open ? "close" : "rotateleft"} />
        </WrapperButton>
      </div>

      <div className="relative max-w-fit xl:hidden">
        <WrapperButton
          ariaLabel="View accessories for this van."
          open={menu.accessories.open}
          onClick={() => {
            menuChange({ accessories: true });
          }}
        >
          <Icons icon={menu.accessories.open ? "close" : "hamburger"} />
        </WrapperButton>
      </div>
    </>
  );
}
