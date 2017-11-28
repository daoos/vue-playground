export const centered = () => {
    return {
        template: `
            <div :style="style">
                <div :style="innerStyle">
                <story/>
                </div>
            </div>
        `,
        data() {
            return {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto',
                },
                innerStyle: {
                    margin: 'auto',
                },
            };
        },
    };
}

export const padding = () => {
    return {
        template: `
            <div :style="style">
                <div>
                <story/>
                </div>
            </div>
        `,
        data () {
            return {
                style: {
                    padding: '50px',
                    'background-color': '#f7f7f7',
                    height: '100vh',
                    'overflow-y': 'hidden'
                }
            }
        }
    }
}