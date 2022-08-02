import NilLoader from './nilloader';
const { Grid, Image, Button, Typography, DropdownMenu, BasicSpinner } = Voxeliface;

function NilLoaderInterface({ instanceId }) {
    const versions = NilLoader.versions;
    const instance = Instances.getInstance(instanceId);
    const [downloading, setDownloading] = React.useState(false);
    const download = async version => {
        setDownloading(version);

        await NilLoader.download(instance, version);

        toast.success(`Downloaded NilLoader v${version} successfully!`);
        setDownloading();
    };
    return <Grid padding={8} background="$secondaryBackground2" borderRadius={8} css={{
        position: 'relative'
    }}>
        <Image src={NilLoader.icon} size={48} background="$secondaryBackground" borderRadius={4} css={{
            minWidth: 48,
            minHeight: 48,
            boxShadow: '$buttonShadow'
        }}/>
        <Grid margin="4px 0 0 12px" padding="4px 0" spacing={2} direction="vertical">
            <Typography size="1rem" color="$primaryColor" family="Nunito" lineheight={1}>
                NilLoader
            </Typography>
            <Typography size=".8rem" color="$secondaryColor" family="Nunito" lineheight={1}>
                {downloading ? `Downloading v${downloading}` : instance.config.nilloader ? `Version ${instance.config.nilloader} (Ready)` : 'Not Installed'}
            </Typography>
        </Grid>
        <Grid spacing={8} css={{
            right: 8,
            position: 'absolute'
        }}>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <Button theme="accent" disabled={downloading}>
                        {downloading && <BasicSpinner size={16}/>}
                        Set Version
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content sideOffset={8}>
                    <DropdownMenu.Label>NilLoader Versions</DropdownMenu.Label>
                    {versions.map((version, key) =>
                        <DropdownMenu.Item key={key} onClick={() => download(version)} disabled={version === instance.config.nilloader}>
                            {version}
                        </DropdownMenu.Item>
                    )}
                    <DropdownMenu.Arrow/>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Grid>
    </Grid>;
};
Patcher.patchChild('InstancePage', 'TabItem', (child, page) => {
    if(child.props.value === 3)
        return React.cloneElement(child, {
            children: Patcher.joinChild(
                <NilLoaderInterface instanceId={page.props.instanceId}/>,
                child.props.children
            )
        });
    return child;
});