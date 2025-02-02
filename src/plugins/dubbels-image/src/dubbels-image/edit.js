import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import "./editor.scss";

import { MediaPlaceholder } from "@wordpress/block-editor";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { fg = "", bg = "" } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "dubbels-image")}>
					<MediaPlaceholder
						onSelect={(el) => {
							setAttributes({ fg: el.url });
						}}
						allowedTypes={["image"]}
						multiple={false}
						labels={{ title: "fg" }}
						mediaPreview={
							!!attributes.fg && <img width="50" src={attributes.fg} />
						}
					>
						"extra content"
					</MediaPlaceholder>
					<MediaPlaceholder
						onSelect={(el) => {
							setAttributes({ bg: el.url });
						}}
						allowedTypes={["image"]}
						multiple={false}
						labels={{ title: "bg" }}
						mediaPreview={
							!!attributes.bg && <img width="50" src={attributes.bg} />
						}
					>
						"extra content"
					</MediaPlaceholder>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="container bg">
					<div style={{ backgroundImage: `url(${bg})` }}></div>
				</div>

				<div className="container fg">
					<img className="img-fg" src={fg} alt="placeholder" />
				</div>
			</div>
		</>
	);
}
