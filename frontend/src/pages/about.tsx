import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Shield, Truck, Users, Award, Globe, Heart, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Happy Customers", value: "50K+", icon: Users },
  { label: "Products Sold", value: "100K+", icon: Award },
  { label: "Countries Served", value: "25+", icon: Globe },
  { label: "Years of Experience", value: "5+", icon: Heart },
]

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We source only the highest quality products from trusted manufacturers and suppliers worldwide.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Our customers are at the heart of everything we do. We strive to exceed expectations every day.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable",
    description: "Quick shipping and reliable delivery ensure you get your products when you need them.",
  },
  {
    icon: Heart,
    title: "Sustainable",
    description: "We're committed to sustainable practices and supporting eco-friendly products and packaging.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "Visionary leader with 10+ years in e-commerce and retail technology.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description: "Tech expert specializing in microservices architecture and scalable systems.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    description: "Operations specialist ensuring smooth logistics and customer satisfaction.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">E-Store</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're revolutionizing e-commerce with cutting-edge microservices technology, delivering exceptional shopping
            experiences that scale with your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Modern Architecture
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Scalable Platform
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Customer First
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Innovation Driven
            </Badge>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, E-Store began as a vision to create a more efficient, scalable, and user-friendly
                  e-commerce platform. We recognized that traditional monolithic systems couldn't keep up with the
                  demands of modern online shopping.
                </p>
                <p>
                  Our team of experienced engineers and retail experts came together to build something different - a
                  microservices-based platform that could scale infinitely while maintaining lightning-fast performance
                  and reliability.
                </p>
                <p>
                  Today, we serve thousands of customers worldwide, processing millions of transactions with 99.9%
                  uptime. But we're just getting started.
                </p>
              </div>
              <Button className="mt-6" asChild>
                <Link href="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Our team at work"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind E-Store, working tirelessly to bring you the best shopping experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform leverages cutting-edge microservices architecture for unmatched performance, scalability,
                and reliability.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Microservices Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable, maintainable services that can grow with your business needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-level security with encryption, monitoring, and compliance standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast order processing and real-time inventory management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust E-Store for their shopping needs. Experience the
                difference of modern e-commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">
                    Start Shopping
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
