import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import NavigationMenuTrigger from "@/components/navigation-menu-trigger";
import MenuItemLink from "@/components/menu-item-link";
import NavigationMenuItem from "@/components/navigation-menu-item";
import NavigationMenu from "@/components/navigation-menu";
import "./page.scss";

export default async function SamplePage({ params, searchParams }) {
  undefined;

  return (
    <>
      <div className="samplePage_15_15">
        <NavigationMenu>
          <RadixNavigationMenu.List className="frame59_15_16">
            <NavigationMenuItem
              content={
                <div className="frame60_28_8">
                  <div className="frame63_28_16">
                    <div className="frame_28_11">
                      <svg
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="vector_28_31"
                      >
                        <path
                          d="M20.75 12L12 20.75M19 2.375L2.375 19"
                          stroke="black"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="shadcnUi_28_17">
                      <span className="shadcnUi">shadcn/ui</span>
                    </div>

                    <div className="aSet_28_19">
                      <span className="aSetOf">
                        A set of beautifully-designed, accessible components and
                        a code distribution platform. Works with your favorite
                        frameworks. Open Source. Open Code.
                      </span>
                    </div>
                  </div>

                  <div className="frame62_28_10">
                    <MenuItemLink
                      hover={false}
                      title="Introduction"
                      description="Re-usable components built using Radix UI and Tailwind CSS."
                      className="menuItemLink_29_40"
                    />
                    <MenuItemLink
                      hover={false}
                      title="Installation"
                      description="How to install dependencies and structure your app."
                      className="menuItemLink_29_43"
                    />
                    <MenuItemLink
                      hover={false}
                      title="Typography"
                      description="Styles for headings, paragraphs, lists...etc"
                      className="menuItemLink_29_49"
                    />
                  </div>
                </div>
              }
            >
              <NavigationMenuTrigger
                hover={false}
                text="Learn"
                className="navigationMenuTrigger_30_98"
              />
            </NavigationMenuItem>

            <NavigationMenuItem
              content={
                <div className="frame61_29_52">
                  <div className="frame62_29_58">
                    <MenuItemLink
                      hover={false}
                      title="Introduction"
                      description="Build high-quality, accessible design systems and web apps."
                      className="menuItemLink_29_59"
                    />
                    <MenuItemLink
                      hover={false}
                      title="Getting started"
                      description="A quick tutorial to get you up and running with Radix Primitives."
                      className="menuItemLink_29_60"
                    />
                    <MenuItemLink
                      hover={false}
                      title="Styling"
                      description="Unstyled and compatible with any styling solution."
                      className="menuItemLink_29_61"
                    />
                  </div>

                  <div className="frame64_29_68">
                    <MenuItemLink
                      hover={false}
                      title="Animation"
                      description="Use CSS keyframes or any animation library of your choice."
                      className="menuItemLink_29_69"
                    />
                    <MenuItemLink
                      hover={false}
                      title="Accessibility"
                      description="Tested in a range of browsers and assistive technologies."
                      className="menuItemLink_29_70"
                    />
                    <MenuItemLink
                      hover={false}
                      title="Releases"
                      description="Radix Primitives releases and their changelogs."
                      className="menuItemLink_29_71"
                    />
                  </div>
                </div>
              }
            >
              <NavigationMenuTrigger
                hover={false}
                text="Overview"
                className="navigationMenuTrigger_30_102"
              />
            </NavigationMenuItem>
          </RadixNavigationMenu.List>
        </NavigationMenu>
      </div>
    </>
  );
}
