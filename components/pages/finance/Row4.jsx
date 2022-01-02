import { PaymentInfo, RecentTransactionsCard } from "./utilities";

export default function () {
  return (
    <div>
      <PaymentInfo />
      <RecentTransactionsCard
        name="shadrack"
        id="2233"
        transactionType="School Fees payment"
        amount="200"
      />
    </div>
  );
}
