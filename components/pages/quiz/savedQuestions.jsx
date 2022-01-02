import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function SavedQuesiions() {
  return (
      <div className="mt-5">
        <Card>
          <CardContent>
            <Typography variant="body1" className="w-full text-center">
              No previous questions available
            </Typography>
          </CardContent>
        </Card>
      </div>
  );
}
