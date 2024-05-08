export default function Page({ params }: { params: { reviewId: string,id:string } }) {
    return <div>Product ID: {params.id} and Review ID: {params.reviewId}</div>
  }