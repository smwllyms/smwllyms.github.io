import * as React from "react";
import { BaseElement, BaseElementProps } from "../Base/BaseElement";
import Image from "../Image/Image";
import { Text } from "../Text/Text";
import { EventConfiguration, SupportedEvents } from "../../hooks/useEventHandlers";
import {
  useHeroSliderStyles,
  useSlideStyles,
  useImageStyles,
  useImageWrapperStyles,
  useOverlayStyles,
  useDotStyles,
  LeftArrowBaseStyles,
  RightArrowBaseStyles,
  DotsBaseStyles,
  TitleBaseStyles,
  ButtonBaseStyles,
  DescriptionBaseStyles
} from "./HeroSlider.css";
import { Button } from "../Button/Button";

export interface HeroSlide {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

export interface HeroSliderProps extends BaseElementProps {
  items: HeroSlide[];
  auto?: boolean;
  intervalMs?: number;
}

export const HeroSlider = ({
  items,
  auto,
  intervalMs,
  id,
  ariaLabel,
  testId,
  classNames,
  style
}: HeroSliderProps): React.JSX.Element => {
  const [index, setIndex] = React.useState(0);
  const count = items.length;

  const styles = useHeroSliderStyles();
  const imgStyles = useImageStyles();
  const imgWrapperStyles = useImageWrapperStyles();
  const leftArrowStyles = LeftArrowBaseStyles;
  const rightArrowStyles = RightArrowBaseStyles;
  const dotsStyles = DotsBaseStyles;
  const buttonStyles = ButtonBaseStyles;
  const titleStyles = TitleBaseStyles;
  const descStyles = DescriptionBaseStyles;

  const next = () => setIndex(last =>
    (((last + 1) % count) + count) % count);
  const prev = () => setIndex(last =>
    (((last - 1) % count) + count) % count);

  const eventConfiguration: EventConfiguration = React.useMemo(() => ({
    listenTo: [SupportedEvents.POINTER_CLICK],
    handler: ({ nativeEvent }) => {
      const target = nativeEvent.target as HTMLElement;
      const actionEl = target.closest("[data-action]") as HTMLElement | null;
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (!action) return;
      else if (action.startsWith("dot-")) {
        const idx = Number(action.split("-")[1]);
        if (!Number.isNaN(idx)) setIndex(idx);
      }
    }
  }), [index, items]);

  // auto slide
  React.useEffect(() => {
    if (!auto || count <= 1) return;
    const id = window.setInterval(() => next(), intervalMs);
    return () => window.clearInterval(id);
  }, [auto, index, intervalMs, count]);

  return (
    <BaseElement
      style={{ ...styles, ...style }}
      eventConfigurations={[eventConfiguration]}
      id={id}
      ariaLabel={ariaLabel}
      testId={testId}
      classNames={classNames}
    >
      {count > 0 ? (
        <>
          {items.map((it, i) => {
            const slideStyle = useSlideStyles(i === index);
            const overlayStyle = useOverlayStyles(i === index);
            return (
              <BaseElement
                key={i}
                style={slideStyle}
              >
                <Image
                  src={it.image}
                  alt={it.title}
                  imgStyle={imgStyles}
                  wrapperStyle={imgWrapperStyles}
                />
                <BaseElement style={overlayStyle}>
                  <>
                    <BaseElement style={{
                      width: "100%",
                      alignItems: "center"
                    }}>
                      <Text
                        text={it.title}
                        style={titleStyles}
                      />
                    </BaseElement>
                    {it.description ? <Text
                      text={it.description}
                      style={descStyles}
                    /> : <></>}
                    {it.link ? (
                      <BaseElement style={{
                        width: "100%",
                        alignItems: "center"
                      }}>
                        <Button
                          data-action="view"
                          style={buttonStyles}
                          label={"Learn more"}
                          onClick={items[index].link
                            ? () => window.open(items[index].link, "_blank")
                            : undefined
                          }
                        />
                      </BaseElement>
                    ) : <></>}
                  </>
                </BaseElement>
              </BaseElement>
            );
          })}
        </>
      ) : <></>}

      {count > 1 ? (
        <>
          <BaseElement
            style={leftArrowStyles}
            eventConfigurations={[{
              listenTo: [SupportedEvents.POINTER_CLICK],
              handler: () => prev()
            }]}
            ariaLabel="Previous"
          >
            <div>◀</div>
          </BaseElement>
          <BaseElement
            style={rightArrowStyles}
            eventConfigurations={[{
              listenTo: [SupportedEvents.POINTER_CLICK],
              handler: () => next()
            }]}
            ariaLabel="Next"
          >
            <div>▶</div>
          </BaseElement>
          <div style={dotsStyles}>
            {items.map((_, i) => (
              <div
                key={i}
                data-action={`dot-${i}`}
                style={useDotStyles(i === index)}
              />
            ))}
          </div>
        </>
      ) : <></>}
    </BaseElement>
  );
};
