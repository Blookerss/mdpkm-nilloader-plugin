// mdpkm's UI Library:
// https://github.com/Excalware/react-voxeliface
const { Grid, Typography, TextHeader, NavigationItem } = Voxeliface;

// https://docs.mdpkm.voxelified.com/docs/plugin-api/patcher
Patcher.patchChild('Home', 'SideNavigation', child =>
    React.cloneElement(child, {
        children: Patcher.joinChild(
            <NavigationItem name="Example Page" icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.27637 9.05276C3.52335 8.92926 3.82369 9.02938 3.94719 9.27637C4.10102 9.58403 4.55143 9.90613 5.33452 10.1471C6.08799 10.3789 7.03631 10.5 7.99997 10.5C8.96363 10.5 9.91195 10.3789 10.6654 10.1471C11.4485 9.90613 11.8989 9.58403 12.0528 9.27637C12.1763 9.02938 12.4766 8.92926 12.7236 9.05276C12.9706 9.17625 13.0707 9.47659 12.9472 9.72358C12.601 10.4159 11.8014 10.8438 10.9595 11.1029C10.088 11.371 9.03631 11.5 7.99997 11.5C6.96363 11.5 5.91195 11.371 5.04043 11.1029C4.19851 10.8438 3.39893 10.4159 3.05276 9.72358C2.92926 9.47659 3.02938 9.17625 3.27637 9.05276Z" fill="currentColor"/>
                    <path d="M6 2.5H10C11.4283 2.5 12.4493 2.50106 13.2252 2.60538C13.9867 2.70776 14.4368 2.90128 14.7678 3.23223C15.0987 3.56319 15.2922 4.01331 15.3946 4.77481C15.4989 5.55069 15.5 6.57165 15.5 8C15.5 9.42835 15.4989 10.4493 15.3946 11.2252C15.2922 11.9867 15.0987 12.4368 14.7678 12.7678C14.4368 13.0987 13.9867 13.2922 13.2252 13.3946C12.4493 13.4989 11.4283 13.5 10 13.5H6C4.57165 13.5 3.55069 13.4989 2.77481 13.3946C2.01331 13.2922 1.56319 13.0987 1.23223 12.7678C0.901278 12.4368 0.707757 11.9867 0.605376 11.2252C0.501062 10.4493 0.5 9.42835 0.5 8C0.5 6.57165 0.501062 5.55069 0.605376 4.77481C0.707757 4.01331 0.901278 3.56319 1.23223 3.23223C1.56319 2.90128 2.01331 2.70776 2.77481 2.60538C3.55069 2.50106 4.57165 2.5 6 2.5Z" stroke="currentColor"/>
                    <path d="M6 8V5.5" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M10 8V5.5" stroke="currentColor" strokeLinecap="round"/>
                </svg>
            }>
                <Grid width="100%" height="100%" padding=".75rem 1rem" direction="vertical" css={{
                    overflow: 'auto'
                }}>
                    <TextHeader>mdpkm Example Plugin</TextHeader>
                    <Typography color="$primaryColor" family="Nunito" textalign="start">
                        This is a example of the Patcher for React Components.<br/>
                        Go and check out other stuff too!
                    </Typography>
                </Grid>
            </NavigationItem>,
            child.props.children
        )
    })
);