import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

function previewImage(srcId, imageId) {
    const srcEl = document.getElementById(srcId);
    const imgEl = document.getElementById(imageId);

    if (srcId && imgEl) {
        if (srcEl.value) {
            imgEl.src = srcEl.value;
        }
    }
}

class ImageWidget extends React.PureComponent {
    state = {};

    componentDidMount() {
        const imageId = `${this.props.id}_preview`;
        const imgEl = document.getElementById(imageId);
        if (imgEl) {
            imgEl.onerror = () => {
                imgEl.src =
                    "data:image/gif;base64,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";
            };
        }
    }

    loadImage = () => {
        if (this.file && this.file.preview) {
            URL.revokeObjectURL(this.file.preview);
            this.file = null;
        }
    };

    uploadImage = () => {
        const { id, options } = this.props;
        if (options && options.uploadImage) {
            options.uploadImage(id, this.uploadedData);
        }
    };

    onDropzoneDrop = files => {
        if (files && files.length > 0) {
            this.file = files[0];
            // let image = new Image();
            // image.onload = this.loadImage;
            // image.src = this.file.preview;

            const imageId = `${this.props.id}_preview`;
            const imgEl = document.getElementById(imageId);
            imgEl.src = this.file.preview;

            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onloadend = () => {
                try {
                    const base64data = reader.result.split(",");
                    if (base64data.length === 2) {
                        this.uploadedData = base64data[1];
                    }
                } catch (e) {
                    console.error(e);
                }
            };

            this.setState({ isImageDropped: true });
        }
    };

    componentWillReceiveProps(newProps) {
        if (this.props.value !== newProps.value) {
            this.setState({ isImageDropped: false });
            delete this.uploadedData;
        }
    }

    render() {
        const props = this.props;
        const { BaseInput } = props.registry.widgets;
        const { id, value, options } = props;
        const { isImageDropped } = this.state;
        const imageId = `${id}_preview`;

        const enableUpload = options.enableUpload;
        return (
            <div className="ui segment" style={{ margin: 0 }}>
                <BaseInput className="ui action input" {...props}>
                    {isImageDropped && (
                        <button
                            type="button"
                            className="ui button"
                            onClick={this.uploadImage}>
                            Upload
                        </button>
                    )}
                    {!isImageDropped && (
                        <button
                            type="button"
                            className="ui button"
                            onClick={() => previewImage(id, imageId)}>
                            Preview
                        </button>
                    )}
                </BaseInput>
                <div
                    className="ui horizontal divider"
                    style={{
                        fontSize: "0.8em",
                        marginTop: "4px",
                        marginBottom: "4px",
                    }}>
                    Preview
                </div>
                <div className="ui fluid centered medium image">
                    {enableUpload && (
                        <Dropzone
                            className="imagedrop"
                            accept="image/png, image/jpeg"
                            onDrop={this.onDropzoneDrop}>
                            <img
                                id={imageId}
                                src={
                                    value ||
                                    "https://semantic-ui.com/images/wireframe/image.png"
                                }
                            />
                            <i>
                                To upload an image, click or drop your image
                                here.
                            </i>
                        </Dropzone>
                    )}
                    {!enableUpload && (
                        <img
                            id={imageId}
                            src={
                                value ||
                                "https://semantic-ui.com/images/wireframe/image.png"
                            }
                        />
                    )}
                </div>
            </div>
        );
    }
}

if (process.env.NODE_ENV !== "production") {
    ImageWidget.propTypes = {
        value: PropTypes.string,
        id: PropTypes.string,
    };
}

export default ImageWidget;
