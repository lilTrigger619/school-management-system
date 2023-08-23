import Layout from "../../components/managementLayout/layout";
import { Typography } from "@material-ui/core";
import { Row1, Row2, Row3, Row4, Row5 } from "../../components/pages/classes";
import PhotoIcon from "@material-ui/core/";

export default function ClassesPage() {
    return (
        <Layout>
            <div>
                <Typography variant="h5" className="text-center">
                    Class Rooms
                </Typography>
                <Row1 />
                <Row2 />
                <Row3 />
                <Row4 />
                <Row5 />
            </div>
        </Layout>
    );
}
